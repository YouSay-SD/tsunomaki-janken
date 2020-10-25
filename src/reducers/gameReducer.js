import { types } from "../types/types";

const initialState = {
  gameInProgress: false,
  pick: '',
  housePick: '',
  win: 0,
  lose: 0,
  draw: 0,
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
        win: state.win + 1
      }

    case types.gameLose:
      return {
        ...state,
        lose: state.lose + 1
      }

    case types.gameDraw:
      return {
        ...state,
        draw: state.draw + 1
      }

    default:
      return state;
  }
}