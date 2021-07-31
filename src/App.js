import Home from './Home'
import Notes from './Notes'
import About from './About'
import Login from './Login'
import './App.css';
import Navigation from './Navigation';
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';
//import { getAuth, signInWithPhoneNumber } from "firebase/auth";


function App() {
 const [admin, setuser] = useState(null)
 function submit() {
  let email = document.querySelector('#email').value 
  let password = document.querySelector('#password').value 
  firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
 // Signed in
 setuser(userCredential.user)
 // ...
})
.catch((error) => {
   console.log(error);
}); 
 }
 
  
  return (
<div>
      {admin ?
       <div>
        <Navigation className='umar'/>
        <Router>
             <Switch>
               <Route path="/about">
                 <About />
               </Route>
               <Route path="/notes">
                 <Notes />
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
