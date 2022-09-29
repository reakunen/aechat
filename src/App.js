import React, { useEffect, useState } from 'react'
import { auth, db, signOutUser } from './firebase-config.js'
import { onAuthStateChanged } from 'firebase/auth'
import Login from './components/Login.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import Usercard from './components/Usercard.js'
import MdNightlight from 'react-icons/md'
import BsFillSunFill from 'react-icons/bs'
import Chat from './components/Chat.js'
import './App.css'
const App = () => {
	const [user, loading] = useAuthState(auth)
	const [night, setNight] = useState(false) 
	if (loading) {
		return (
			<div className="loading-container">
				<h1>Initializing User...</h1>
			</div>
		)
	}
	return (
		<div className="App">
			{!user ? (
				<Login />
			) : (
				<div className="container">
					<div className="top-portion">
						<h1>Aechat</h1>
						{/* {night ? <MdNightlight/> : <BsFillSunFill/>} */}
					</div>
					<button onClick={() => console.log(user)}>USER</button>
					<Usercard user={user} signOutUser={signOutUser} />
					<Chat />
				</div>
			)}
			<footer>
				<p>Brian Mai Industries &copy; 2022</p>
			</footer>
		</div>
	)
}

export default App
