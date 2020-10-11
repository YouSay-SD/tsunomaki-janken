import React from 'react';
import { HeroContainer } from '../containers/hero';
import { MenuContainer } from '../containers/menu';

export default function Home() {
  return (
    <>
      <HeroContainer>
        <MenuContainer />
      </HeroContainer>
    </>
  )
}
