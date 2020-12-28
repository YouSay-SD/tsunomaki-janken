import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBtw1-ONf3cRcEObOz7vJnE8XcrFuQJ7HY",
  authDomain: "tsunomaki-janken-3bc75.firebaseapp.com",
  projectId: "tsunomaki-janken-3bc75",
  storageBucket: "tsunomaki-janken-3bc75.appspot.com",
  messagingSenderId: "36016707050",
  appId: "1:36016707050:web:3c436e7d5bfbfbf1e10e93"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export {
  db,
  firebase,
  googleAuthProvider,
  facebookAuthProvider
}
