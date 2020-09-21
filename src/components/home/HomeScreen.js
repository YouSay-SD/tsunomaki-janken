import React from 'react';
import styled from 'styled-components';
import bg from '../../watame-background.png';
import { Sidebar } from './Sidebar';

const HomeStyled = styled.div`
  width: 100vw;
  height: 100vh;

`;

export const HomeScreen = () => {
  return (
    <HomeStyled
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${ bg })`,
        backgroundPosition: 'center'
      }}
    >

      <Sidebar />

    </HomeStyled>
  )
}
