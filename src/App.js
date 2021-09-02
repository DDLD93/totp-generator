import React, { useContext } from 'react';
import {AuthContext} from './Auth'
import Home from './Home'
import Settings from './Settings'
import About from './About'
import Login from './Login'
import './App.css';
import Navigation from './Navigation';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Loading from './Loading';





function App() {
  
  const {  login,isLoading, loginCreateSwitch,createUser, authReady} = useContext(AuthContext)
 
 
  function submit() {
  let email = document.querySelector('#email').value 
  let password = document.querySelector('#password').value 
  loginCreateSwitch()
  login(email, password)
  console.log('clicked at login')
 }

 function signup() {
  let email = document.querySelector('#email').value 
  let password = document.querySelector('#password').value 
  loginCreateSwitch()
  createUser(email, password)
  console.log('clicked at signup')
 }
 

  
  return (

  <div>
      
      {authReady !==null &&
       <div>
         {authReady === false && <Login signin={submit}
                            signup={signup} 
                            />}
         {authReady && <div>
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
      </div>}
     </div>
      }
      
      {authReady === null && <div><Loading/></div>}                      
      </div>
  

  )
}
export default App;
