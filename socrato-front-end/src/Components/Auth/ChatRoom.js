import React, {useRef, useState} from 'react'
import ChatMessage from './ChatMessage'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

export default function ChatRoom() {

    // const dummy = useRef();


    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25);
    const auth = firebase.auth();

    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    // dummy.current.scrollIntoView({ behavior: 'smooth' });
}

    return (
        <>
        <p>test</p>
            <main>
            {messages && messages.map(msg => <ChatMessage key ={msg.id} message={msg} />)} 
            </main>

            <form onSubmit={sendMessage}>

            <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

            <button type="submit" disabled={!formValue}>Send</button>

            </form>
        </>
    );
}
