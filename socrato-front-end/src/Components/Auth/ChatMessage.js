import React from 'react'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


export default function ChatMessage(props) {

    const { text, uid, photoURL } = props.message
    const auth = firebase.auth();
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (
        <div>
            <div className={`message ${messageClass}`}>
                <img className = "profile-picture" alt="users profile" src={photoURL} />
                <p>{text}</p>
            </div>
        </div>
    )
}
