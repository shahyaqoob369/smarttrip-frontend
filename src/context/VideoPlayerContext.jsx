import React, { createContext, useState, useContext, useRef } from 'react';

const VideoPlayerContext = createContext();

export const useVideoPlayer = () => useContext(VideoPlayerContext);

export const VideoPlayerProvider = ({ children }) => {
  const [videoState, setVideoState] = useState({
    src: null,
    isPlaying: false,
  });
  
  // Use a ref to store the callback. This is more stable than state for functions.
  const onEndedCallback = useRef(null);

  const playVideo = (src, onEnded) => {
    // Store the function to be called when the video ends
    onEndedCallback.current = onEnded;
    setVideoState({
      src: src,
      isPlaying: true,
    });
  };

  const stopVideo = () => {
    // If a callback exists, execute it
    if (onEndedCallback.current) {
      onEndedCallback.current();
    }
    // Reset the state and the ref
    setVideoState({ src: null, isPlaying: false });
    onEndedCallback.current = null;
  };

  const value = { playVideo, stopVideo, videoState };

  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
    </VideoPlayerContext.Provider>
  );
};