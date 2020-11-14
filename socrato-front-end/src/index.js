// Import React 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import to allow routing
import { BrowserRouter } from "react-router-dom";

// Import firebase
import firebase from 'firebase/app';

// Import database
import 'firebase/firestore';

// Import Authentication
import 'firebase/auth';

// Ininialise firebase
firebase.initializeApp({
  apiKey: "AIzaSyA-SfmTqYA5aeN-xRSQGOa-ZKdR-BrmiHc",
  authDomain: "socrato-90b57.firebaseapp.com",
  databaseURL: "https://socrato-90b57.firebaseio.com",
  projectId: "socrato-90b57",
  storageBucket: "socrato-90b57.appspot.com",
  messagingSenderId: "36000810020",
  appId: "1:36000810020:web:9fe6b6bc0116cf1d0b84b1",
  measurementId: "G-4FY48TV0YE"
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

