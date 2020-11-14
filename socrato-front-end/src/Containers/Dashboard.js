import React from 'react'
// import { Link } from 'react-router-dom'
import { ChatRoom, SignOut } from '../Components'

export default function Dashboard() {
    return (
        <div>
            <ChatRoom />
            <SignOut />
        </div>
    )
}
