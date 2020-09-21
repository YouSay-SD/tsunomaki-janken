import React from 'react';
import styled from 'styled-components';
import video from '../../video.mp4';

const JankenStyled = styled.div`
  background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
`;

const VideoStyled = styled.video`
  width: 100vw;
  height: 800px;
  object-fit: cover;
  object-position: center;
`;

export const JankenScreen = () => {
  return (
    <JankenStyled>
      
      <VideoStyled loop muted autoPlay src={ video } type="video/mp4" />

    </JankenStyled>
  )
}
