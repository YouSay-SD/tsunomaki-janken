import React from 'react';
import { Hero } from '../components';
import { useSpring } from 'react-spring';


export function HeroContainer() {
  const fade = useSpring({
    from: { transform: 'translateX(100px)', opacity: 0 },
    to: { transform: 'translateX(0px)', opacity: 1 },
  })

  return (
    <Hero>
      <Hero.Image
        style={ fade }
        src='/images/backgrounds/watame-background.png' 
      />
    </Hero>    
  )
}
