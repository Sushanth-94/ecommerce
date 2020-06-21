import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAMITB1gDWl_eWbXhUjXys3NDEqTHn_2vo",
    authDomain: "ecommerce-d717b.firebaseapp.com",
    databaseURL: "https://ecommerce-d717b.firebaseio.com",
    projectId: "ecommerce-d717b",
    storageBucket: "ecommerce-d717b.appspot.com",
    messagingSenderId: "765625097336",
    appId: "1:765625097336:web:6bd0290b9f66c16701e18d",
    measurementId: "G-FE6TBYDFVC"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;