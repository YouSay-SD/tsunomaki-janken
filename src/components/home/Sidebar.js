import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../../helpers/breakPoints';
import { flexCenter } from '../../helpers/mixins';
import logo from '../../logo.png';

const SidebarStyled = styled.aside`
  background-color: ${ props => props.theme.colors.white };
  max-width: 700px;
  width: 100%;
  height: 100%;
  position: relative;
  padding: 50px;
  ${ flexCenter };
  flex-direction: column;
`;

const LogoStyled = styled.div`
  max-width: 500px;
  margin-bottom: 50px;
`;

const TitleStyled = styled.div`
  text-align: center;

  h2 {
    font-size: 45px;
    color: ${ props => props.theme.colors.primary };

  /* Mobile */
  ${respondBelow.sm`
    font-size: 25px;
  `}
  }
`;

export const Sidebar = () => {
  return (
    <SidebarStyled>

      <LogoStyled>

        <img src={ logo } title="watame-logo" alt="watame-logo" />

      </LogoStyled>

      <TitleStyled>

        <h2>Start Game!</h2>

      </TitleStyled>
      
    </SidebarStyled>
  )
}
