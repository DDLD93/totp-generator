import { createContext, useState, useEffect } from 'react'
import firebase from 'firebase';


export const AuthContext = createContext()

export default function AuthContextProvider ({ children }) {
  const [user, setUser] = useState([])
  const [authReady, setAuthReady] = useState(false)
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthReady(true)
        
        // ...
      } else {
        setAuthReady(false)
      }
    });
  
    setInterval(() => {
      getdata().then(e => {
        console.log(e.data)
        setUser(e.data)})
    }, 30000);

    return () => {
      
    }
  }, [])
  const getdata = firebase.functions().httpsCallable('getdata');
  const login = (email, password) => {
    console.log('context')
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      user ? setAuthReady(true) : setAuthReady(false)
      console.log('logged in', user);
      getdata().then(e => {
        console.log(e.data)
        setUser(e.data)})
    }).catch((err) => console.log(err))
  }
  
  

  const logout = () => {
    firebase.auth().signOut()
  }

 const context = {user, login, logout, authReady , isLoading}

  return (
    <AuthContext.Provider value={context}>
      { children }
    </AuthContext.Provider>
  )
}


