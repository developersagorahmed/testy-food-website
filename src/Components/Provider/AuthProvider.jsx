import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
	getAuth,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	updateProfile,
	GoogleAuthProvider,
	signInWithPopup,
	GithubAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const provider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();
	const handleGithubSignIn = () => {
		return signInWithPopup(auth, githubProvider);
	};
	const handleGoogleSignIn = () => {
		return signInWithPopup(auth, provider);
	};
	const registerUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const logOut = () => {
		return signOut(auth);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const updateName = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (LoggedInUser) => {
			setUser(LoggedInUser);
		});
		return () => {
			unSubscribe();
		};
	}, []);
	const authInfo = {
		registerUser,
		user,
		logOut,
		signIn,
		updateName,
		handleGoogleSignIn,
		handleGithubSignIn,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
