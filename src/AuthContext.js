import { createContext, useState, useEffect } from 'react';
var firebase = require('firebase');
var firebaseui = require('firebaseui');


const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false
})

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [authReady, setAuthReady] = useState(false)

  useEffect(() => {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      // Other config options...
    });
    

    return () => {
      
    }
  }, [])

  const login = () => {
    
  }

  const logout = () => {
    
  }

  const context = { user, login, logout, authReady }

  return (
    <AuthContext.Provider value={context}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContext
