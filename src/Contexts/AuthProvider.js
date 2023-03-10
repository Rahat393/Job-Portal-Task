import { React, createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from "../firebase/Firebase";

export const AuthContext = createContext();
const auth = getAuth(app)

 
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    return signOut(auth)
  }

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo)
  }

  useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
       setUser(currentUser)
      //  setLoading(false)
     });
     return () => unSubscribe
   } , [])

  const authInfo = {
    createUser,
    signIn,
    updateUser,
    logOut,
    user
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;