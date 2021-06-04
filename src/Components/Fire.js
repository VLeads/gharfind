import firebase from "firebase";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "gharfind-28.firebaseapp.com",
    projectId: "gharfind-28",
    storageBucket: "gharfind-28.appspot.com",
    messagingSenderId: "230832502349",
    appId: "1:230832502349:web:efe1b54d8abb4d93980e04",
    measurementId: "G-K4FRDN8G25"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export {
  firestore, fire as default
} 