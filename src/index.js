import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

