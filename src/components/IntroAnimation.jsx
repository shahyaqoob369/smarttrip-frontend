import React from 'react';
import { motion } from 'framer-motion';

// This component renders a full-screen intro animation.
// The onAnimationComplete prop is a function that will be called when the animation finishes.
const IntroAnimation = ({ onAnimationComplete }) => {
  return (
    // This is the full-screen container for the animation
    <motion.div
      className="fixed inset-0 bg-brand-blue flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }} // Animate the entire container to fade out
      transition={{ duration: 0.5, delay: 2.5 }} // Fade out after a 2.5s delay
      onAnimationComplete={onAnimationComplete} // Call the function when fade-out is done
    >
      {/* This is the logo that will animate */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }} // Start invisible and small
        animate={{ opacity: 1, scale: 1 }} // Animate to visible and normal size
        transition={{ duration: 1, ease: "easeOut" }} // Define the animation properties
      >
        <h1 className="text-5xl lg:text-7xl font-bold text-white">
          <span className="text-white">Smart</span>
          <span className="text-orange-400">Trip</span>
          <span className="text-white">Deals</span>
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default IntroAnimation;
