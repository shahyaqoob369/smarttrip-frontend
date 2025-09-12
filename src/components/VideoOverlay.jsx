import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '../context/VideoPlayerContext';

const VideoOverlay = () => {
  const { videoState, stopVideo } = useVideoPlayer();

  return (
    <AnimatePresence>
      {videoState.isPlaying && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <video
            src={videoState.src}
            autoPlay
            muted
            playsInline
            onEnded={stopVideo} // Trigger stopVideo when the clip finishes
            className="max-w-full max-h-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoOverlay;