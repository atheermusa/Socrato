import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export default function signInWithGoogle(props) {

    const auth = firebase.auth();
    const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    }

    return (

    <div onClick= {signInWithGoogle} className={props.class}>{props.text}</div>
    )
}
