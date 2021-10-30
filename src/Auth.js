import { createContext, useState, useEffect } from 'react'
import firebase from './Firebase';


export const AuthContext = createContext()

export default function AuthContextProvider ({ children }) {
  const [user, setUser] = useState([])
  const [authReady, setAuthReady] = useState(null)


  
  useEffect(() => {
    setInterval(() => {
      firebaseCall()
    }, 30000);
    
      if(authReady) {
        getdata().then(e => {
          setUser(e.data)
        }).catch((err) => console.log(err))
    }
  }, [authReady])
  const getdata = firebase.functions().httpsCallable('getdata');


  const login = (email, password) => {
    console.log('context')
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      user ? setAuthReady(true) : setAuthReady(false)
      console.log('logged in', user);
    }).catch((err) => {
      console.log(err)
    })
  }

  const createUser = (email, password)=> {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      console.log('New user registered')
      // ...
    })
    .catch((error) => {
    });
  }
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setAuthReady(true)
    } else {
      setAuthReady(false)
    }
  }); 

  const logout = () => {
    firebase.auth().signOut().then(() => {
      setAuthReady(false)
      setUser([])
    })
  }


  function firebaseCall() {
        console.log('getting data from firestore')
        if(authReady) {
          getdata().then(e => {
            setUser(e.data)
          }).catch((err) => console.log(err))
        }
        //setisLoading(false)
  }
  

 

 const context = {user, firebaseCall,createUser, login, logout, authReady}

  return (
    <AuthContext.Provider value={context}>
      {children}
    </AuthContext.Provider>
  )
}


