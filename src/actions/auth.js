import { facebookAuthProvider, firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({user}) => {
        dispatch(
          login(user.uid, user.displayName)
        );
      })
  }
}

export const startFacebookLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(facebookAuthProvider)
      .then(({user}) => {
        dispatch(
          login(user.uid, user.displayName)
        );
      })
  }
}

const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName
    }
  }
}