import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Panel } from '../components';
import { TokenContainer } from './token';
import tokens from '../fixtures/tokens.json';
import { VideoContainer } from './video';
import { gameStart, setHousePick, setPick } from '../actions/game';
import { gameResult } from '../helpers/gameResult';

export function PanelContainer() {
  const title = [...'Make Your Choice'];

  const dispatch = useDispatch();
  const { pick, housePick } = useSelector(state => state.game);

  const houseSelection = () => {
    const houseSelectionPick = [...tokens][Math.floor(Math.random() * [...tokens].length)].name;
    dispatch(setHousePick(houseSelectionPick));
  }

  const handleChoice = (tokenName) => {
    houseSelection();
    dispatch(setPick(tokenName));
    dispatch(gameStart());
  }

  useEffect(() => {
    gameResult(pick, housePick, dispatch);
  }, [pick, housePick, dispatch])

  return (
    <Panel>
      <VideoContainer url={`/videos/${(housePick) ? housePick : 'default'}.mp4`} />

      <Panel.Content>
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
