import React, { useState } from 'react';
import { Hero } from '../components';
import { useTransition } from 'react-spring';
import { useEffect } from 'react';
import backgrounds from '../fixtures/backgrounds.json';

export function HeroContainer() {
  const [index, setIndex] = useState(0);
  const increment = () => setIndex(index => (index + 1) % backgrounds.length)

  useEffect(() => {
    const interval = setInterval(() => {
      increment()
    }, 3000);
    return () => clearInterval(interval);
  }, [index])

  const transitions = useTransition(backgrounds[index], item => item.id, {
    from: {opacity: 0, transform: 'translateX(300px) scale(1.1)'},
    enter: {opacity: 1, transform: 'translateX(0px) scale(1)'},
    leave: {opacity: 0, transform: 'translateX(-300px) scale(0.9)'},
  });
  
  return (
    <Hero>
      {
        transitions.map(({item, props, key}) => {
          return <Hero.Background
            key={key}
            style={{ 
              backgroundImage: `url(${item.url})`,
              ...props 
            }}
          />
        })
      }
    </Hero>    
  )
}
