import React from 'react';
import YouTube from 'react-youtube';

const VideoYouTube = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0
    }
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  }
  return <YouTube videoId="2GV8vp0Zm0M" opts={opts} onReady={onReady} />;
};

export default VideoYouTube;
