// src/context/VideoPlayerContext.js

import React, { createContext, useState, useContext } from 'react';

const VideoPlayerContext = createContext();

export const useVideoPlayer = () => useContext(VideoPlayerContext);

export const VideoPlayerProvider = ({ children }) => {
  const [videoState, setVideoState] = useState({
    src: null,
    isPlaying: false,
    onEnded: null,
  });

  // CHANGE #1: Store the callback directly, without wrapping it in another function.
  const playVideo = (src, onEndedCallback) => {
    setVideoState({
      src: src,
      isPlaying: true,
      onEnded: onEndedCallback, // Store the function directly
    });
  };

  // CHANGE #2: Execute the stored callback directly and safely.
  const stopVideo = () => {
    // First, execute the callback if it exists
    if (videoState.onEnded && typeof videoState.onEnded === 'function') {
      videoState.onEnded(); // Call it directly, just once
    }
    // Then, reset the state
    setVideoState({ src: null, isPlaying: false, onEnded: null });
  };

  const value = { playVideo, stopVideo, videoState };

  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
    </VideoPlayerContext.Provider>
  );
};