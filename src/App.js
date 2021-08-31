import React, { useContext } from 'react';
import {AuthContext} from './Auth'
import Home from './Home'
import Settings from './Settings'
import About from './About'
import Login from './Login'
import './App.css';
import Navigation from './Navigation';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";





function App() {
  const { user, login, logout, authReady} = useContext(AuthContext)
 
 
  function submit() {
  let email = document.querySelector('#email').value 
  let password = document.querySelector('#password').value 
  login(email, password)
  console.log('clicked at login')
 }
 function signUP() {
  var email = "ujere@gmail.com";
  var password = "11051600";
  // [START auth_signup_password]
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log('yayi')
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }

  
  return (

  <div>
      {authReady ?
       <div>
        <Navigation className='umar'/>
        <Router>
             <Switch>
               <Route path="/about">
                 <About />
               </Route>
               <Route path="/Settings">
                 <Settings />
               </Route>
               <Route exact path="/">
                 <Home />
               </Route>
             </Switch>
        </Router>
     </div>
     : <Login submit={submit}/>
      }
      </div>
  

  )
}
export default App;
