import React from 'react'
import { serverTimestamp, addDoc, collection } from 'firebase/firestore'
import { auth, db } from '../firebase-config'
import { useState } from 'react'
const SendMessage = ({scroll}) => {
	const [input, setInput] = useState('')

	const handleSendMessage = async (e) => {
		e.preventDefault()
		if (input.trim().length === 0) {
            return
        }
        
        const {uid, displayName} = auth.currentUser
		await addDoc(collection(db, 'messages'), {
			text: input,
            name: displayName,
            uid: uid,
			timestamp: serverTimestamp(),
		})
        setInput('')
	}

	return (
		<form action="" onSubmit={handleSendMessage}>
			<input
				type="text"
				placeholder="Send a message..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={handleSendMessage}>Send</button>
		</form>
	)
}

export default SendMessage
