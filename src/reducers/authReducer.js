import { types } from "../types/types";

const initialState = {
  isLogged: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
        isLogged: true,
      }

    case types.logout:
      return {
        isLogged: false
      }

    default:
      return state;
  }
}