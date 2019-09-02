import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCnYaEVze7_FFX1NBR_NgByk41GpqZoLhQ",
  authDomain: "crwn-db-1e1a6.firebaseapp.com",
  databaseURL: "https://crwn-db-1e1a6.firebaseio.com",
  projectId: "crwn-db-1e1a6",
  storageBucket: "",
  messagingSenderId: "721977975354",
  appId: "1:721977975354:web:4f426865e38c326e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
