import React from 'react'
import { Link } from 'react-router-dom'
import "../../Style/LandingPage.css"
import SignIn from './SignIn'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


export default function LandingPage() {

    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    }
    return (
        <div className = "landing-page-container">
            <div className = "landing-page-title">
                Socrato
            </div>
            <div className = "landing-page-tagline">
                Democratising great conversations.
            </div>
            
             <div onClick= {signInWithGoogle} className = "landing-page-register"> Sign in with Google </div>
             {/* <SignIn /> */}
        </div>
    )
}
