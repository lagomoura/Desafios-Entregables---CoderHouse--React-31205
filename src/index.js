import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//! FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1Yoi7Aa_21S8Fbj8rF5mr-m5rbxVCr-s",
  authDomain: "eita-club-cerveza.firebaseapp.com",
  projectId: "eita-club-cerveza",
  storageBucket: "eita-club-cerveza.appspot.com",
  messagingSenderId: "211764051905",
  appId: "1:211764051905:web:1baf19ab1ff614251b3940"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//! FIN FIREBASE


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App />
);


