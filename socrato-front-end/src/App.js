import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
      {user ? <Dashboard /> : <LandingPageContainer /> }
    </div>
  );
}

export default App;
