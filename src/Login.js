import React, { useState } from 'react';
import  { useContext } from 'react';
import {AuthContext} from "./Auth";
import CssBaseline from '@material-ui/core/CssBaseline';
import { TextField, Button } from '@material-ui/core';

export default function Login(props) {
  const [login, setlogin] = useState()
  const loginswitch = () => setlogin(prevlogin => !prevlogin)
  const { loginCreate } = useContext(AuthContext)
  return (
    <React.Fragment>
      <CssBaseline />
      <div className='loginContainer' maxWidth="sm" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
         
          {!login && ( <div className="login-container">
            <TextField required fullWidth type='email' id="email" label="Email" />
            <TextField required fullWidth type='password' id="password" label="Password" />
            <Button onClick={props.signin}  disabled ={loginCreate}  required fullWidth variant="contained" color="primary">Sign In</Button>
            <p>Not registered yet <a onClick={loginswitch} href="#">Create an account</a> </p>
          </div>)}
          {login && ( <div className="login-container">
            <TextField required fullWidth type='email' id="email" label="Email" />
            <TextField required fullWidth type='password' id="password" label="Password" />
            <TextField required fullWidth type='password' id="password" label="Password-Confirm" />
            <Button onClick={props.signup} disabled ={loginCreate} fullWidth variant="contained" color="primary">Sign Up</Button>
            <p>Already registered  <a onClick={loginswitch} href="#">Login</a> instead </p>
          </div>)}
         
       \
        
        
      </div>
    </React.Fragment>
  );
}