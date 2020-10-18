import React from 'react';
import styled from 'styled-components/macro';
import { respondBelow } from '../helpers/breakPoints';

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 650px 1fr;
  height: 100vh;

  ${respondBelow.md`
    grid-template-columns: 1fr 1fr;
  `}

  ${respondBelow.sm`
    grid-template-columns: 1fr;
  `}
`;

export const HeaderContainer = ({children}) => {
  return (
    <HeaderStyled>
      {children}
    </HeaderStyled>
  )
}
