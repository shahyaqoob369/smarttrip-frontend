import React, { createContext, useState, useContext, useRef } from 'react';

const VideoPlayerContext = createContext();

export const useVideoPlayer = () => useContext(VideoPlayerContext);

export const VideoPlayerProvider = ({ children }) => {
  const [videoState, setVideoState] = useState({
    src: null,
    isPlaying: false,
  });
  
  // Use a ref to store the callback. This is the key to the fix.
  // A ref is a stable container that persists across re-renders.
  const onEndedCallback = useRef(null);

  const playVideo = (src, onEnded) => {
    // Store the function to be called when the video ends in the ref
    onEndedCallback.current = onEnded;
    setVideoState({
      src: src,
      isPlaying: true,
    });
  };

  const stopVideo = () => {
    // If a callback exists in the ref, execute it
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