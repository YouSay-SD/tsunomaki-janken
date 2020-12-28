import firebase, { googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types";

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(userCred => {
        console.log(userCred)
      })
  }
}