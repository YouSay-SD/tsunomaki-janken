import React, { useState } from 'react';
import { Hero } from '../components';
import { useTransition } from 'react-spring';
import backgrounds from '../fixtures/backgrounds.json';
import useInterval from 'react-useinterval';

export function HeroContainer() {
  const [index, setIndex] = useState(0);
  const increment = () => setIndex(index => (index + 1) % backgrounds.length)
  useInterval(increment, (document.hasFocus()) ? 3000 : null);
  
  const transitions = useTransition(backgrounds[index], item => item.id, {
    from: {opacity: 0, transform: 'translateX(300px) scale(1.1)'},
    enter: {opacity: 1, transform: 'translateX(0px) scale(1)'},
    leave: {opacity: 0, transform: 'translateX(-300px) scale(0.9)'},
  });

  return (
    <Hero>
      {
        transitions.map(({item, props, key}) => (
          <Hero.Background
            key={key}
            style={{ 
              backgroundImage: `url(${item.url})`,
              ...props 
            }}
          />
        ))
      }
    </Hero>    
  )
}
