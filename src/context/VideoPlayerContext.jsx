import React, { createContext, useState, useContext, useRef, useCallback } from 'react';
import VideoOverlay from '../components/VideoOverlay'; // FIX: Import the VideoOverlay component

const VideoPlayerContext = createContext();

export const useVideoPlayer = () => useContext(VideoPlayerContext);

export const VideoPlayerProvider = ({ children }) => {
  const [videoSrc, setVideoSrc] = useState(null);
  
  const onEndedCallbackRef = useRef(null);

  const playVideo = useCallback((src, onEndedCallback) => {
    onEndedCallbackRef.current = onEndedCallback;
    setVideoSrc(src);
  }, []);

  const handleVideoEnd = useCallback(() => {
    if (onEndedCallbackRef.current) {
      onEndedCallbackRef.current();
    }
    setVideoSrc(null);
    onEndedCallbackRef.current = null;
  }, []);

  const value = { playVideo };

  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
      <VideoOverlay videoSrc={videoSrc} onVideoEnd={handleVideoEnd} />
    </VideoPlayerContext.Provider>
  );
};