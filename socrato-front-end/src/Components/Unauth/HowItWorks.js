import React from 'react'
import { Link } from 'react-router-dom'
import "../../Style/HowItWorks.css"

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


export default function HowItWorks() {

    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    }

    return (
        <div className="how-it-works-container">
            <div className="how-it-works-title">
                How it Works
            </div>
            <div className="how-it-works-description">
                A short summary of how socrato will work
            </div>
            <div  onClick= {signInWithGoogle} className = "how-it-works-register"> click here to sign in with Google </div>
        </div>
    )
}
