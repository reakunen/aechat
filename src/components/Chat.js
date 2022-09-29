import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { auth, db } from '../firebase-config'
import {
  deleteDoc,
  doc,
	query,
	collection,
	orderBy,
	onSnapshot,
	querySnapshot,
} from 'firebase/firestore'
import SendMessage from './SendMessage'
import Message from './Message'
import './Chat.css'
const Chat = () => {
	const scroll = useRef()
	const [messages, setMessages] = useState([])
	useEffect(() => {
		const q = query(collection(db, 'messages'), orderBy('timestamp'))
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let mes = []
			querySnapshot.forEach((doc) => {
				console.log('pushed')
				mes.push({ ...doc.data(), id: doc.id })
			})
			setMessages(mes)
			console.log(mes)
		})
		// return () => unsubscribe()
	}, [])
  const [styling, setStyling] = useState('') 
  const handleDelete = async () => {
    const userDoc = doc(db, "users", auth.uid);
    deleteDoc(userDoc) 
  }
	return (
		<div className='chat-component'>
			{messages.map((message) => (
				<Message key={message.id} message={message}/>
			))}
			<SendMessage scroll={scroll}/>
			<span ref={scroll}></span>
      <button onClick={handleDelete}>DELETE EVERYTHING!</button>
		</div>
	)
}

export default Chat
