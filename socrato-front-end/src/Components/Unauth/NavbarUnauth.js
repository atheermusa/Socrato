import React from 'react'
import { Link } from 'react-router-dom'
import "../../Style/NavbarUnauth.css"

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export default function NavbarUnauth() {

    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    }

    return (
        <div className = "unauth-navbar-container">
            <Link to = "/" className= "navbar-logo"> <img className = "navbar-logo-img"alt="logo" src="https://www.pinclipart.com/picdir/big/369-3696201_chat-group-conversation-svg-png-icon-free-.png" /></Link>
            <div className = "unauth-navbar-links-container">
                <Link to = "/" className = "unauth-navbar-link">
                    Home
                </Link>
                <Link to = "/HowItWorks" className = "unauth-navbar-link">
                    How it Works
                </Link>
                <div onClick= {signInWithGoogle} className = "unauth-navbar-link">
                    Login
                </div>
            </div>
        </div>
    )
}
