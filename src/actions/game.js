import { db } from "../firebase/firebase-config";
import { getScores } from "../helpers/get-scores";
import { types } from "../types/types";

export const setGameInProgress = (status) => ({
  type: types.gameInProgress,
  payload: status
})

export const setPick = (tokenName) => ({
  type: types.gamePick,
  payload: tokenName
})

export const setHousePick = (houseSelectionPick) => ({
  type: types.gameHousePick,
  payload: houseSelectionPick
})

export const gameWin = () => ({
  type: types.gameWin,
})

export const gameLose = () => ({
  type: types.gameLose,
})

export const gameDraw = () => ({
  type: types.gameDraw,
})

export const gameReset = () => ({
  type: types.gameReset,
})

export const shareScore = ( newScore ) => {
  return async ( dispatch ) => {
    db.collection(`scores/`).add( newScore );
  }
}