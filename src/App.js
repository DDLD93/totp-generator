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



function App() {
  const [render, setrender] = useState(null)
 var admin = false; 
 function submit() {
  let email = document.querySelector('#email').value 
  let password = document.querySelector('#password').value 
  firebase.auth().signInWithEmailAndPassword(email, password)
.then((userCredential) => {
 // Signed in
 admin =userCredential.user
 setrender(userCredential.user)
 console.log(admin)
 
})
.catch((error) => {
   console.log(error);
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
