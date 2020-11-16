import React from 'react'

import firebase from 'firebase/app';
import 'firebase/auth';

export default function SignOut() {

    const auth = firebase.auth();
    const firestore = firebase.firestore();

    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
}
