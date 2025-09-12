import React, { createContext, useState, useContext } from 'react';

const VideoPlayerContext = createContext();

export const useVideoPlayer = () => useContext(VideoPlayerContext);

export const VideoPlayerProvider = ({ children }) => {
  const [videoState, setVideoState] = useState({
    src: null,
    isPlaying: false,
    onEnded: null,
  });

  const playVideo = (src, onEndedCallback) => {
    setVideoState({
      src: src,
      isPlaying: true,
      onEnded: () => onEndedCallback, // Wrap in a function to ensure it's callable
    });
  };

  const stopVideo = () => {
    if (videoState.onEnded) {
      videoState.onEnded()(); // Execute the stored callback
    }
    setVideoState({ src: null, isPlaying: false, onEnded: null });
  };

  const value = { playVideo, stopVideo, videoState };

  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
    </VideoPlayerContext.Provider>
  );
};