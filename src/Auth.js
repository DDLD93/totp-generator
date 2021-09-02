import { createContext, useState, useEffect } from 'react'
import firebase from 'firebase';


export const AuthContext = createContext()

export default function AuthContextProvider ({ children }) {
  const [user, setUser] = useState([])
  const [authReady, setAuthReady] = useState(null)
  const [isLoading, setisLoading] = useState(null)
  const [loginCreate, setloginCreate] = useState(false)



  useEffect(() => {

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthReady(true)
        firebaseCall()
        
        // ...
      } else {
        setAuthReady(false)
      }
    });
  
    setInterval(() => {
    firebaseCall()
      
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
      firebaseCall()
    }).catch((err) => console.log(err))
  }

  
  function firebaseCall() {
        console.log('getting data from firestore')
        getdata().then(e => {
        console.log(e.data)
        setUser(e.data)})
        //setisLoading(false)
  }
  const createUser = (email, password)=> {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      console.log('New user registered')
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }
  const loginCreateSwitch = ()=> {
    setloginCreate(!loginCreate)
  }
  

  const logout = () => {
    firebase.auth().signOut().then(() => {
      setAuthReady(false)
      setUser([])
    })
  }

 const context = {user,loginCreate, createUser, login, logout, loginCreateSwitch, authReady , isLoading}

  return (
    <AuthContext.Provider value={context}>
      { children }
    </AuthContext.Provider>
  )
}


