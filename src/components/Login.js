import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth, app } from '../firebase-config'
import { BsChat } from 'react-icons/bs'
import './Login.css'

const Login = () => {
	const provider = new GoogleAuthProvider(app)
	// provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
	const signInUser = () => {
		signInWithPopup(auth, provider)
			.then((res) => {
				const credential = GoogleAuthProvider.credentialFromResult(res)
				const user = res.user
			})
			.catch((err) => console.log(err))
	}
	return (
		<div>
			<div className="background">
				<div className="logo">
					<BsChat />SupChat
				</div>
				<div className="card">
					<GoogleButton onClick={signInUser} />
				</div>
			</div>
		</div>
	)
}

export default Login
