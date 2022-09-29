import { useState } from 'react'
import { auth, db } from '../firebase-config'
import { doc, deleteDoc } from 'firebase/firestore'
import { AiOutlineClose } from 'react-icons/ai'
import './Message.css'
const Message = ({ message }) => {
	const handleDelete = async () => {
		const userDoc = doc(db, 'messages', message.id)
		await deleteDoc(userDoc)
		// if (auth.currentUser.uid === message.uid) {
		// }
	}
	const arthurs = [
		'https://cdn.discordapp.com/attachments/894042199778553877/1017930639955210340/image-removebg-preview_2.png',
		'https://media.discordapp.net/attachments/433755830215770133/1017646092365594694/unknown.png',
	]
	const style = {
		message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
		name: `absolute mt-[-4rem] text-gray-600 text-xs`,
		sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full show`,
	}

	const styling =
		message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`

	const styleDelete = {
		sent: `d-none d-flex justify-content-end`,
	}
	const showDelete =
		message.uid !== auth.currentUser.uid
			? `${styleDelete.sent} deleteBut`
			: `${styleDelete.received} deleteBut`

	return (
		<div className={`${style.message} ${styling}`}>
			<p className={style.name}>{message.name}</p>
			{message.text === 'arthur' ? (
				<img src={arthurs[1]} alt="" />
			) : (
				<p>{message.text}</p>
			)}
			{message.uid === auth.currentUser.uid && (
				<button style={{ display: 'flex' }} onClick={handleDelete}>
					<AiOutlineClose variant="primary" />
				</button>
			)}
		</div>
	)
}

export default Message
