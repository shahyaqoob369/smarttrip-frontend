import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '../context/VideoPlayerContext';

const VideoOverlay = () => {
  const { videoState, stopVideo } = useVideoPlayer();

  return (
    <AnimatePresence>
      {videoState.isPlaying && (
        // 1. We've added a backdrop-blur class to the main container
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* 2. We've added styling to the video element itself */}
          <video
            src={videoState.src}
            autoPlay
            muted
            playsInline
            onEnded={stopVideo}
            className="w-full h-auto max-w-4xl max-h-[80vh] rounded-lg shadow-2xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoOverlay;







// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useVideoPlayer } from '../context/VideoPlayerContext';

// const VideoOverlay = () => {
//   const { videoState, stopVideo } = useVideoPlayer();

//   return (
//     <AnimatePresence>
//       {videoState.isPlaying && (
//         <motion.div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <video
//             src={videoState.src}
//             autoPlay
//             muted
//             playsInline
//             onEnded={stopVideo} // Trigger stopVideo when the clip finishes
//             className="max-w-full max-h-full"
//           />
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default VideoOverlay;