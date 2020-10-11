import React from 'react';
import styled from 'styled-components';
import { Panel } from './Panel';

const JankenStyled = styled.div`
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
  height: 100vh;
`;

const VideoStyled = styled.video`
  width: 100vw;
  height: 800px;
  object-fit: cover;
  object-position: center;
  vertical-align: top;
`;

export const JankenScreen = () => {
  return (
    <JankenStyled>
      
      <VideoStyled loop autoPlay src='/videos/video.mp4' type="video/mp4" />

      <Panel />

    </JankenStyled>
  )
}
