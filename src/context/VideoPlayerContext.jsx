import React, { createContext, useState, useContext } from 'react';

const VideoPlayerContext = createContext();

export const useVideoPlayer = () => useContext(VideoPlayerContext);

export const VideoPlayerProvider = ({ children }) => {
  const [videoState, setVideoState] = useState({
    src: null,
    isPlaying: false,
    onEndedCallback: null,
  });

  const playVideo = (src, onEnded) => {
    setVideoState({
      src: src,
      isPlaying: true,
      onEndedCallback: onEnded,
    });
  };

  const stopVideo = () => {
    if (videoState.onEndedCallback) {
      videoState.onEndedCallback();
    }
    setVideoState({ src: null, isPlaying: false, onEndedCallback: null });
  };

  const value = { playVideo, stopVideo, videoState };

  return (
    <VideoPlayerContext.Provider value={value}>
      {children}
    </VideoPlayerContext.Provider>
  );
};