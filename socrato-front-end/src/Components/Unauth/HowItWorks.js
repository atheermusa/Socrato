import React from 'react'
import "../../Style/HowItWorks.css"

import { SignInWithGoogle } from '../index'

export default function HowItWorks() {

    return (
        <div className="how-it-works-container">
            <div className="how-it-works-title">
                How it Works
            </div>
            <div className="how-it-works-description">
                <p className = "description-text">Feeling like you're having the same conversations and hearing the same points of view all day every day? It's easy to get stuck discussing the same "hot topics" and even easier to get trapped into an echo chamber where you only become exposed to one type of opinion.</p> 
                <p className = "description-text">At Socrato we believe everyone has the right to engaging, interesting and insightful conversations. Upon logging in, you'll be greeted with "Todays topic", an interesting conversation starter with a chat room where you can share your opinions with other users from anywhere in the world. </p>
                <p className = "description-text">Topics range from funny conversation starters to deep philosophical questions and the room and the topic reset every day, ensuring you'll always have a new conversation with fresh perspectives</p>             
            </div>
            <SignInWithGoogle text="Sign in with Google" class = "how-it-works-register"></SignInWithGoogle>
            {/* <div  onClick= {signInWithGoogle} className = "how-it-works-register"> Sign in with Google </div> */}
        </div>
    )
}
