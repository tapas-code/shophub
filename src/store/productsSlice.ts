import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../types/product';

interface ProductsState {
  items: Product[];
  filteredItems: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  searchTerm: string;
  currentPage: number;
  itemsPerPage: number;
  sortBy: 'price-asc' | 'price-desc' | 'rating-asc' | 'rating-desc' | null;
}

const initialState: ProductsState = {
  items: [],
  filteredItems: [],
  status: 'idle',
  error: null,
  searchTerm: '',
  currentPage: 1,
  itemsPerPage: 8,
  sortBy: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
      state.currentPage = 1;
      state.filteredItems = filterAndSortProducts(state);
    },
    setSortBy: (state, action: PayloadAction<ProductsState['sortBy']>) => {
      state.sortBy = action.payload;
      state.filteredItems = filterAndSortProducts(state);
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        state.filteredItems = filterAndSortProducts(state);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch products';
      });
  },
});

const filterAndSortProducts = (state: ProductsState): Product[] => {
  let result = [...state.items];

  // Apply search filter
  if (state.searchTerm) {
    result = result.filter(product =>
      product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  }

  // Apply sorting
  if (state.sortBy) {
    result.sort((a, b) => {
      switch (state.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating-asc':
          return a.rating.rate - b.rating.rate;
        case 'rating-desc':
          return b.rating.rate - a.rating.rate;
        default:
          return 0;
      }
    });
  }

  return result;
};

export const { setSearchTerm, setSortBy, setCurrentPage } = productsSlice.actions;
export default productsSlice.reducer;