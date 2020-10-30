import React from 'react';
import { useSelector } from 'react-redux';
import { useSpring } from 'react-spring';
import { Video } from '../components';

export function VideoContainer({url}) {
  const { gameInProgress } = useSelector(state => state.game);

  // Blur
  const blur = useSpring({
    filter: gameInProgress ? 'blur(0px)' : 'blur(15px)'
  });

  return (
    <Video loop autoPlay muted src={url} type="video/mp4" style={blur} />
  )
}
