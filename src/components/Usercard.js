import './Usercard.css'
import { useState, useEffect } from 'react'
import { auth } from '../firebase-config'
const Usercard = ({ user, signOutUser }) => {
	const [playlistData, setPlaylistData] = useState({})
	// useEffect(() => {
	// 	const url = 'https://www.googleapis.com/youtube/v3/playlists'
	// }, [user])
	return (
		<div>
			<div className="card-container">
				<h4>Logged in as {user.displayName}</h4>
				<div className="text"></div>
				<img src={user.photoURL} alt="" className='userPhoto'/>
				<button onClick={() => console.log(user.photoURL)}>
					Click - temporary
				</button>
				<button onClick={signOutUser}>
					Sign Out 
				</button>
			</div>
		</div>
	)
}

export default Usercard
