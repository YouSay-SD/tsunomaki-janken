import React from 'react';
import styled from 'styled-components';
import { Token } from './Token';

const TokenGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 500px;
  margin: 0 auto;
  transform: translateY(-100px);
`;

export const TokenGrid = () => {
  return (
    <TokenGridStyled>

      <Token />

      <Token />

      <Token />
      
    </TokenGridStyled>
  )
}
