import React, { useState } from 'react';
import { Panel } from '../components';
import { TokenContainer } from './token';
import tokens from '../fixtures/tokens.json';
import { VideoContainer } from './video';

export function PanelContainer() {
  const title = [...'Make Your Choice'];

  const [play, setPlay] = useState(false);
  const [AIToken, setAIToken] = useState('');

  const AIChoice = () => {
    const tokensArr = [...tokens];
    const AITokenChoice = tokensArr[Math.floor(Math.random() * tokensArr.length)].name;
    setAIToken(AITokenChoice);
  }

  const handleChoice = (name) => {
    setPlay(true);
    AIChoice();
  }

  return (
    <Panel>
      <VideoContainer url={`/videos/${AIToken}.mp4`} />

      <Panel.Content style={{opacity: (play) ? '0' : '1'}}>
        <Panel.Title>
          {title.map((letter, i) => (
            <span key={i}>{ letter }</span>
          ))}
        </Panel.Title>

        <Panel.Grid>
          {tokens.map(({url, name, id}) => (
            <TokenContainer 
              key={id} 
              url={url} 
              name={name} 
              handleChoice={handleChoice} 
            />
          ))}
        </Panel.Grid>
      </Panel.Content>
    </Panel>
  )
}
