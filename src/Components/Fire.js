import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBruf4pbJJHPj_jdwlVDnzF_q_GPOvGt2I",
    authDomain: "gharfind-28.firebaseapp.com",
    projectId: "gharfind-28",
    storageBucket: "gharfind-28.appspot.com",
    messagingSenderId: "230832502349",
    appId: "1:230832502349:web:efe1b54d8abb4d93980e04",
    measurementId: "G-K4FRDN8G25"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;