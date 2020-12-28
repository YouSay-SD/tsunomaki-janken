import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Panel } from '../components';
import { TokenContainer } from './token';
import tokens from '../fixtures/tokens.json';
import { VideoContainer } from './video';
import { setGameInProgress, setHousePick, setPick } from '../actions/game';
import { gameResult } from '../helpers/gameResult';
import { useSpring } from 'react-spring';
import { ScoreContainer } from './score';
import { ModalContainer } from './modal';

export function PanelContainer() {
  const title = [...'Make Your Choice'];

  const dispatch = useDispatch();
  const { gameInProgress, pick, housePick } = useSelector(state => state.game);

  const fadeIn = useSpring({
    opacity: gameInProgress ? 0 : 1,
    transform: gameInProgress ? 'translateY(-100vh)' : 'translateY(0px)'
  });

  const houseSelection = () => {
    const houseSelectionPick = [...tokens][Math.floor(Math.random() * [...tokens].length)].name;
    dispatch(setHousePick(houseSelectionPick));
  }

  const handleChoice = (tokenName) => {
    houseSelection();
    dispatch(setPick(tokenName));
    dispatch(setGameInProgress(true));
    setTimeout(() => {
      dispatch(setGameInProgress(false));
      dispatch(setHousePick(''));
    }, 18000);
  }

  useEffect(() => {
    gameResult(pick, housePick, dispatch);
  }, [pick, housePick, dispatch])

  return (
    <Panel>
      <VideoContainer url={`/videos/${(housePick) ? housePick : 'default'}.mp4`} />

      <Panel.Content style={fadeIn}>
        {!gameInProgress && <ScoreContainer/>}
        <Panel.Title>
          {title.map((letter, i) => (
            <span key={i}>{letter}</span>
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

        <ModalContainer
          button={<button>Share Result & leave a message</button>}
        >
          <form>
            <h3>Leave your message here, it will be posted on the message board</h3>
            <textarea placeholder="Your Message..." />
            <button type="submit">Send</button>
          </form>
        </ModalContainer>
      </Panel.Content>
    </Panel>
  )
}
