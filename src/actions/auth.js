import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({user}) => {
        dispatch(
          login(user.uid, user.displayName, user.photoURL)
        );
      })
  }
}

export const login = (uid, displayName, photoURL) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
      photoURL
    }
  }
}