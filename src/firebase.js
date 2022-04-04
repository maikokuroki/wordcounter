import firebase from 'firebase/compat/app';
import { togetFiresre, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaYQrh06bRKBlclPzaZdR679cvMkIuTvI",
    authDomain: "word-counter-react.firebaseapp.com",
    projectId: "word-counter-react",
    storageBucket: "word-counter-react.appspot.com",
    messagingSenderId: "1071609932588",
    appId: "1:1071609932588:web:709ce1f0b02b6f7474da89"
  };
  
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;