import { createContext, useReducer } from 'react';
import ACTIONS from '../types';
import { gameReducer } from './gameReducer';

const initState = {
  gameInProgress: false,
  pick: '',
  housePick: '',
  score: {
    win: 0,
    lose: 0,
    draw: 0,
  }
}

export const GameContext = createContext(initState)

export const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initState);

  // Set Game In Progress
  const setGameInProgress = (gameInProgress) => {
    dispatch({
      type: ACTIONS.GAME_IN_PROGRESS,
      payload: gameInProgress
    })
  }

  // Pick / Token Selected 
  const setPick = (pick) => {
    dispatch({
      type: ACTIONS.PICK,
      payload: pick
    })
  }

  // House Pick / Token Selected 
  const setHousePick = (pick) => {
    dispatch({
      type: ACTIONS.HOUSE_PICK,
      payload: pick
    })
  }

  // Win
  const setWin = (win) => {
    console.log('action WINasd')
    dispatch({
      type: ACTIONS.WIN,
      payload: win
    })
  }

  // Lose
  const setLose = (lose) => {
    console.log('action loSE')
    dispatch({
      type: ACTIONS.LOSE,
      payload: lose
    })
  }

  // Draw
  const setDraw = (draw) => {
    console.log('action draw')
    dispatch({
      type: ACTIONS.DRAW,
      payload: draw
    })
  }

   // Draw
   const setGameReset = () => {
    dispatch({
      type: ACTIONS.RESET,
    })
  }

  return (
    <GameContext.Provider
      value={{
        ...state,
        setGameInProgress,
        setHousePick,
        setPick,
        setWin,
        setLose,
        setDraw,
        setGameReset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
