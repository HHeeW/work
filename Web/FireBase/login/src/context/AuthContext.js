import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut, 
        onAuthStateChanged} from 'firebase/auth'
import { auth } from "../config/firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    
    const [user, setUser] = useState({})

    const createUser = (email, password) => {   //계정생성
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signin = (email, password) =>{    //로그인
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{    //로그아웃
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[]);

    return(
        <UserContext.Provider value={{createUser, user, logout, signin }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}