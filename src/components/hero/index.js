import React from 'react';
import { Container, Title } from './styles/hero';
// import { Sidebar } from '../sidebar/Sidebar';

export default function Hero() {
  return (
      <Hero.Container>
        
        {/* <Sidebar /> */}

        <Hero.Title>
          asdasdas
        </Hero.Title>
        
      </Hero.Container>
  )
}

Hero.Container = function HeroContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

