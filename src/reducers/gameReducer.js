import { types } from "../types/types";

export const gameReducer = (state = {}, action) => {
  switch (action.type) {
    case types.gameStart:
      return {
        ...state,
      }
  
    default:
      return state;
  }
}