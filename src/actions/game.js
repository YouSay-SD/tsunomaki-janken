import { types } from "../types/types";

export const gameStart = () => ({
  type: types.gameStart,
  payload: true,
})

export const pick = ( tokenName ) => ({
  type: types.gamePick,
  payload: tokenName
})

export const housePick = ( houseSelectionPick ) => ({
  type: types.gameHousePick,
  payload: houseSelectionPick
})

// export const housePick = ( u ) => {
//   return {
//     type: types.housePick,
//     payload: {
//       uid,
//       displayName,
//     }
//   }
// } 
