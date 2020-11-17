import React from 'react'
import { Link } from 'react-router-dom'
import SignOut from './SignOut'
import "../../Style/NavBarAuth.css"

export default function NavBarAuth() {
    return (
        <div>
        <div className = "auth-navbar-container">
            <Link to = "/" className= "navbar-logo"> <img className = "navbar-logo-img"alt="logo" src="https://www.pinclipart.com/picdir/big/369-3696201_chat-group-conversation-svg-png-icon-free-.png" /></Link>
            <div className = "auth-navbar-links-container">
                <SignOut />
            </div>
        </div>
        </div>
    )
}
