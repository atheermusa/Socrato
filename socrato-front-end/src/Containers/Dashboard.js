import React from 'react'
// import { Link } from 'react-router-dom'
import { ChatRoom, SignOut, NavBarAuth } from '../Components'

export default function Dashboard() {
    
    let lastUpdated = 15
    
    let todaysDate = new Date();

    todaysDate = todaysDate.getDate()

    if (todaysDate !== lastUpdated) {
        lastUpdated = todaysDate
        console.log(lastUpdated)
    }

    

    return (
        <div>
            <NavBarAuth />
            <h1>Hello, welcome to Socrato</h1>
            <h2>Today's topic:{lastUpdated}</h2>
            <ChatRoom />
        </div>
    )
}
