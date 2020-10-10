import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../helpers/mixins';
import { Navbar } from '../../ui/Navbar';

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

export const Sidebar = () => {
  return (
    <SidebarStyled>

      <LogoStyled>

        <img src="/images/logos/logo.png" title="watame-logo" alt="watame-logo" />

      </LogoStyled>

      <Navbar />
      
    </SidebarStyled>
  )
}
