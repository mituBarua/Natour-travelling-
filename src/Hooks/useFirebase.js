import React, { useState,useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const auth = getAuth();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider).then((result) => {
          setUser(result.user);
        })
        .finally(() => setIsLoading(false))
      };
      //observer
      useEffect(() =>{
    const unsubscribed = onAuthStateChanged(auth,user => {
        if(user) {
            setUser(user)
        }
        else{
            setUser({})
        }
        setIsLoading(false)
    });
    return () => unsubscribed;
      },[])
      const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {})
        .finally(()=>setIsLoading(false))
      };
      return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
      };
    };
    export default useFirebase;