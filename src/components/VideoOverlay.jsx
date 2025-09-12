import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoOverlay = ({ videoSrc, onVideoEnd }) => {
  return (
    <AnimatePresence>
      {videoSrc && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <video
  src={videoState.src}
  autoPlay
  muted
  playsInline
  onEnded={stopVideo}
  className="max-w-full max-h-full"
/>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoOverlay;