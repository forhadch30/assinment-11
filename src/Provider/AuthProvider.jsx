import { createContext,useEffect,useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading,setLoadig] = useState(true)


    const createUser = (email,password) =>{
        setLoadig(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoadig(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('current User',currentUser)
            setLoadig(false)
        })
        return () =>{
            return unsubscribe()
        }
    },[])

   



    const authFor = {
        user,
        loading,
        createUser,
        signIn
    }
    return (
        <AuthContext.Provider value={authFor}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;