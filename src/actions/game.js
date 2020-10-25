import { types } from "../types/types";

export const gameStart = () => ({
  type: types.gameStart,
  payload: true,
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
