import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react'; // 1. Import the Lottie component

// 2. Import the Lottie JSON animation file
import planeAnimationData from '../assets/animations/plane.json';

const IntroAnimation = ({ onAnimationComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-sky-100 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      onAnimationComplete={onAnimationComplete}
    >
      {/* Container for layering the animations */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* 3. Lottie Plane Animation (Back Layer) */}
        <motion.div 
          className="absolute z-0" // Positioned behind the logo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }} // Fades in slightly after start
        >
          <Lottie 
            animationData={planeAnimationData} 
            loop={false} 
            style={{ width: 400, height: 400 }} // Adjust size as needed
          />
        </motion.div>

        {/* 4. Logo Animation (Front Layer) */}
        <motion.div
          className="relative z-10" // z-10 ensures it's on top of the plane (z-0)
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white">
            <span className="text-blue-600">Smart</span>
            <span className="text-orange-400">Trip</span>
            <span className="text-blue-600">Deals</span>
          </h1>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default IntroAnimation;