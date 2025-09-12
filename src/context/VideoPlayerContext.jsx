import React, { createContext, useState, useContext, useRef, useCallback } from 'react';

const VideoPlayerContext = createContext();

export const useVideoPlayer = () => useContext(VideoPlayerContext);

export const VideoPlayerProvider = ({ children }) => {
  const [videoSrc, setVideoSrc] = useState(null);
  
  // Use a ref to hold the callback. This is a more stable pattern.
  const onEndedCallbackRef = useRef(null);

  const playVideo = useCallback((src, onEndedCallback) => {
    // When a video is requested, store its source and its "on ended" action.
    onEndedCallbackRef.current = onEndedCallback;
    setVideoSrc(src);
  }, []);

  const handleVideoEnd = useCallback(() => {
    // When the video finishes, execute the stored callback if it exists.
    if (onEndedCallbackRef.current) {
      onEndedCallbackRef.current();
    }
    // Then, reset the state to hide the player.
    setVideoSrc(null);
    onEndedCallbackRef.current = null;
  }, []);

  const value = { playVideo };

  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
      {/* The VideoOverlay is now part of the provider and receives props */}
      <VideoOverlay videoSrc={videoSrc} onVideoEnd={handleVideoEnd} />
    </VideoPlayerContext.Provider>
  );
};