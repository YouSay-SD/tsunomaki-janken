import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../helpers/mixins';

const TokenStyled = styled.div`
  background-color: ${ props => props.theme.colors.white };
  width: 150px;
  height: 150px;
  border-radius: 50%;
  ${ flexCenter };

  img {
    max-width: 100px;
  }
`;

export const Token = () => {
  return (
    <TokenStyled>

      <img src="./img/elements/icon-paper.svg" alt="Paper" />
      
    </TokenStyled>
  )
}
