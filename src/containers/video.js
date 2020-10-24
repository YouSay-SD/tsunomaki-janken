import React from 'react';
import { Video } from '../components';

export function VideoContainer({url}) {
  return (
    <Video loop autoPlay muted src={url} type="video/mp4" />
  )
}
