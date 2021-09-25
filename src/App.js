import React, { useContext } from 'react';
import {AuthContext} from './Auth'
import Login from './Login'
import './App.css';
import Layout from './Layout';



import {BrowserRouter as  Router,Switch,Route} from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home'
import Settings from './Settings'
import About from './About'





function App() {
  
  const {  login, loginCreateSwitch,createUser, authReady} = useContext(AuthContext)
 
 
  function signin() {
  let email = document.querySelector('#email').value 
  let password = document.querySelector('#password').value 
  loginCreateSwitch()
  login(email, password)
  console.log('clicked at login')
 }

 function signup() {
  let email = document.querySelector('#email').value 
  let password = document.querySelector('#password').value 
  let passwordConfirmation = document.querySelector('#passwordConfirmation').value 
  if(password === passwordConfirmation) {
    loginCreateSwitch()
    createUser(email, password)
}
 }
 

  
  return (
    <>
    {authReady ? <Layout/>  : <Login signin ={signin} signup ={signup} /> }
    </>


  // <div>
  //   {authReady == null && <>
  //     <h2 style={{textAlign:'center'}} >Loading</h2>
  //   </>}
  //   {authReady && <div><Layout/></div>  }
  //   {authReady === false && <Login signin={signin} signup={signup} />}
    
  // </div>
  

  )
}
export default App;
