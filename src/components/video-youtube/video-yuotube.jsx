import React from 'react';
import YouTube from 'react-youtube';

import './video-yuotube.scss';

const VideoYouTube = ({videoId}) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0
    }
  };
  const onReady = (event) => {
    event.target.pauseVideo();
  };
  return <YouTube videoId={videoId} opts={opts} onReady={onReady} />;
};

export default VideoYouTube;
