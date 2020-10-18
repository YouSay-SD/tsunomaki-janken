import React from 'react';
import { Video } from '../components';

export function VideoContainer() {
  return (
    <Video loop autoPlay muted src='/videos/video.mp4' type="video/mp4" />
  )
}
