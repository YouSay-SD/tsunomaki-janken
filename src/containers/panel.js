import React, { useState } from 'react';
import { Panel } from '../components';
import { TokenContainer } from './token';
import tokens from '../fixtures/tokens.json';
import { VideoContainer } from './video';

export function PanelContainer() {
  const title = [...'Make Your Choice'];

  const [play, setPlay] = useState(false);
  const [selectedToken, setSelectedToken] = useState('');
  const [AIToken, setAIToken] = useState('');
  const [AIVideo, setAIVideo] = useState('default');
  const [winner, setWinner] = useState(false);

  const AIChoice = () => {
    const tokensArr = [...tokens];
    const AITokenChoice = tokensArr[Math.floor(Math.random() * tokensArr.length)].name;
    setAIToken(AITokenChoice);
    setAIVideo(AITokenChoice)
  }

  const handleChoice = (name) => {
    setPlay(true);
    AIChoice();
    setSelectedToken(name);
    handleGameConclusion(selectedToken, AIToken);
  }

  const handleGameConclusion = (selectedToken, AIToken) => {
    console.log(selectedToken)
    console.log(AIToken)
    if(selectedToken != AIToken) {
      console.log('juego')
    } else {
      console.log('empate')
    }
  }

  return (
    <Panel>
      <VideoContainer url={`/videos/${AIVideo}.mp4`} />

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
