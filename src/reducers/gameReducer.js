import { types } from "../types/types";

const initialState = {
  gameInProgress: false,
  pick: '',
  housePick: '',
  score: {
    win: 0,
    lose: 0,
    draw: 0,
  }
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.gameInProgress:
      return {
        ...state,
        gameInProgress: action.payload
      }

    case types.gamePick:
      return {
        ...state,
        pick: action.payload
      }

    case types.gameHousePick:
      return {
        ...state,
        housePick: action.payload
      }

    case types.gameWin:
      return {
        ...state,
        score: { ...state.score, win: state.score.win + 1 }
      }

    case types.gameLose:
      return {
        ...state,
        score: { ...state.score, lose: state.score.lose + 1 }
      }

    case types.gameDraw:
      return {
        ...state,
        score: { ...state.score, draw: state.score.draw + 1 }
      }

    default:
      return state;
  }
}