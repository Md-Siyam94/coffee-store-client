import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase_init";


export const AuthContex = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    console.log(user)
    
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setLoader(false)
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()

        }
    },[])

    const userInfo = {
        user,
        loader,
        createUser,
        userLogin
    }
    return (
        <AuthContex.Provider value={userInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;