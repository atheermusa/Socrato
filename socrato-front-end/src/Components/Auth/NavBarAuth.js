import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarUnauth() {
    return (
        <div>
            <Link to = "/">
                Home
            </Link>
            <Link to = "/conversationstarters">
                Conversation Starters
            </Link>
            <Link>
                Logout
            </Link>
        </div>
    )
}
