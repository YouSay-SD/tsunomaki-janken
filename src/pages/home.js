import React from 'react';
import { HeaderContainer } from '../containers/header';
import { ImageSlideContainer } from '../containers/image-slide';
import { MenuContainer } from '../containers/menu';
import { SocialMediaContainer } from '../containers/socialMedia';

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <MenuContainer />
        <ImageSlideContainer />
      </HeaderContainer>

      <SocialMediaContainer />
    </>
  )
}
