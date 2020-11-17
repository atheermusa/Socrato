import React from 'react'
import { Link } from 'react-router-dom'
import SignOut from './SignOut'

export default function NavBarAuth() {
    return (
        <div>
        <div className = "unauth-navbar-container">
            <Link to = "/" className= "navbar-logo"> <img className = "navbar-logo-img"alt="logo" src="https://www.pinclipart.com/picdir/big/369-3696201_chat-group-conversation-svg-png-icon-free-.png" /></Link>
            <div className = "unauth-navbar-links-container">
                <Link to = "/" className = "unauth-navbar-link">
                    Home
                </Link>
                <Link to = "/HowItWorks" className = "unauth-navbar-link">
                    How it Works
                </Link>
                <SignOut />
            </div>
        </div>
        </div>
    )
}
