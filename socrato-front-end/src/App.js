import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import "./Style/App.css"

// Import firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Import containers for Auth/Unauth
import { LandingPageContainer, Dashboard } from './Containers';
// 

// const firestore = firebase.firestore();

function App() {
  const auth = firebase.auth();
  const [user] = useAuthState(auth)
  const firestore = firebase.firestore();


  return (
    <div className="App">
      <img className="background-img" src="http://res.cloudinary.com/dl4pcxjxz/image/upload/v1605626298/photo-1458501534264-7d326fa0ca04_ob3xsc.jpg" />
      {user ? <Dashboard /> : <LandingPageContainer /> }
    </div>
  );
}

export default App;
