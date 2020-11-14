import React from 'react'
import { Link } from 'react-router-dom'

export default function GreetingCard() {
    return (
        <div>
            <div>
                Hello Name
            </div>
            <div>
                Hows your day going so far?
            </div>
            <Link>
                See who's online
            </Link>
        </div>
    )
}
