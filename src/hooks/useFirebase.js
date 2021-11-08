import { useEffect, useState } from "react"
import initializeFirebase from "../Firebase/firebase.init"
import {
    GoogleAuthProvider, signInWithPopup, updateProfile, getAuth,
    onAuthStateChanged, signInWithEmailAndPassword, signOut,
    createUserWithEmailAndPassword, getIdToken
} from "firebase/auth";
import axios from "axios";

//initialize firebase app
initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        axios.get(`https://aqueous-shelf-84077.herokuapp.com/users/${user?.email}`)
            .then(response => {
                setAdmin(response.data.admin)
            })
    }, [user?.email])



    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed
    }, [auth])

    const registerUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const setUserName = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })

    }

    const logIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        if (method === 'POST') {
            axios.post('https://aqueous-shelf-84077.herokuapp.com/users', user)
                .then(res => {
                    console.log(res)
                })
        } else if (method === 'PUT') {
            axios.put('https://aqueous-shelf-84077.herokuapp.com/users', user)
                .then(res => {
                    console.log(res)
                })
        }

    }

    const logOut = () => {
        setIsLoading(false)
        return signOut(auth)
    }

    return {
        user,
        registerUser,
        logIn,
        logOut,
        isLoading,
        setIsLoading,
        authError,
        setAuthError,
        googleSignIn,
        setUserName,
        saveUser,
        admin,
        token
    }

}

export default useFirebase