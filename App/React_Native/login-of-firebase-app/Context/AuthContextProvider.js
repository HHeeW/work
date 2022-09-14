import React, { createContext, useContext, useEffect, useState } from 'react'
import auth from '@react-native-firebase/auth';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState();

    /** 회원가입 */
    const SignUp = (email, password) => {
        return auth().createUserWithEmailAndPassword(email, password )
    }
    /**로그인 */
    const SignIn = (email, password) => {
        return auth().signInWithEmailAndPassword(email, password)
    }
    /**로그아웃 */
    const SignOut = () => {
        return auth().signout();
    }

    useEffect(()=>{
        const subscriber = auth().onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        });
        return subscriber;
    }, [])

    return(
        <UserContext.Provider value={{SignUp, SignIn, SignOut, user}}>
            { children }
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}