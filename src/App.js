import Home from './Home'
import Settings from './Settings'
import About from './About'
import Login from './Login'
import './App.css';
import Navigation from './Navigation';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';



function App() {
  const [render, setrender] = useState(false)
 var admin = false; 
 function submit() {
  let email = document.querySelector('#email').value 
  let password = document.querySelector('#password').value 
  firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
 // Signed in
 admin =userCredential
 setrender(userCredential.user)
 console.log(admin)
 
})
.catch((error) => {
   console.log(error);
}); 
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
      {render ?
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
