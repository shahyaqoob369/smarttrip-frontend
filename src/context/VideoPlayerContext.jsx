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
      src,
      isPlaying: true,
      onEnded: onEndedCallback, // store the actual callback directly
    });
  };

  const stopVideo = () => {
    if (videoState.onEnded) {
      videoState.onEnded(); // just call the stored callback
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
