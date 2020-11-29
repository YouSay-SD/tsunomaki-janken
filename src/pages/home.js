import React from 'react';
import { BoardContainer } from '../containers/board';
import { HeaderContainer } from '../containers/header';
import { HeroContainer } from '../containers/hero';
import { MenuContainer } from '../containers/menu';
import { SocialMediaContainer } from '../containers/socialMedia';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <MenuContainer />
        <HeroContainer />
      </HeaderContainer>

      <SocialMediaContainer />
      
      <BoardContainer />
    </>
  )
}
