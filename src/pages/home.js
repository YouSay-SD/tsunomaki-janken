import React from 'react';
import { HeaderContainer } from '../containers/header';
import { HeroContainer } from '../containers/hero';
import { MenuContainer } from '../containers/menu';

export default function Home() {
  return (
    <HeaderContainer>
      <MenuContainer />
      <HeroContainer />
    </HeaderContainer>
  )
}
