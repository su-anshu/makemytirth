"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={index}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={`/assets/${images[index]}`}
            layout="fill"
            objectFit="cover"
            alt="Background image"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between p-10">
        <button
          onClick={handlePrev}
          className="p-2 bg-white bg-opacity-50 rounded-full"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="p-2 bg-white bg-opacity-50 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
}
