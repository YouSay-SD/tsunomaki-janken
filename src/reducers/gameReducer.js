import { types } from "../types/types";

const initialState = {
  gameStart: false,
  pick: '',
  housePick: '',
  // active: null
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.gameStart:
      return {
        ...state,
        gameStart: action.payload
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
  
    default:
      return state;
  }
}