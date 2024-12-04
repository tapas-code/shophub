import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const CursorFollow: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      controls.start({
        x: e.clientX - 12,
        y: e.clientY - 12,
        transition: {
          type: "spring",
          damping: 30,
          stiffness: 200,
        },
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  return (
    <>
      <motion.div
        className="fixed w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full pointer-events-none blur-xl"
        animate={controls}
      />
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full pointer-events-none blur-md"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 400,
        }}
      />
    </>
  );
};