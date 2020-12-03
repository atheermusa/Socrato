import React from 'react'
import "../../Style/LandingPage.css"

import { SignInWithGoogle } from '../index'


export default function LandingPage() {

    return (
        <div className = "landing-page-container">
            <div className = "landing-page-title">
                Socrato
            </div>
            <div className = "landing-page-tagline">
                Democratising great conversations.
            </div>
            
            <SignInWithGoogle class = "landing-page-register" text = "Sign in with Google" />
        </div>
    )
}
