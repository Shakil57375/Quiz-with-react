/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
const auth = getAuth(app)
export const AuthContext = createContext(null)
const goggleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true)
    const registerUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const goggleRegister = () =>{
        setLoader(true)
        return signInWithPopup(auth, goggleProvider)
    }
    const forgetPass = (email) =>{
        setLoader(true)
        return sendPasswordResetEmail(auth,email)
    }
    const githubRegister = () =>{
        setLoader(true)
        return signInWithPopup(auth, githubProvider)
    }
    const updateUserData = (user, name) =>{
        setLoader(true)
        return updateProfile(user, name)
    }
    const logOut = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoader(false)
            // console.log(currentUser);
        })
        return () =>{
            unsubscribe()
        }
    },[])
    const authInfo = {
        user,
        loader,
        setLoader,
        registerUser,
        loginUser,
        goggleRegister,
        githubRegister,
        logOut,
        updateUserData,
        forgetPass
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;