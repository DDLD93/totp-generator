import { useEffect } from "react"
import firebase from "firebase/app";
import 'firebase/auth'



function Login(props) {

  
  useEffect(() => {
    
  }, [])
    

    return (
     <div class="full-screen-container">
        <div class="login-container">
          <h3 class="login-title">Welcome</h3>
          <div class="input-group">
              <label>Email</label>
              <input id='email' type="email" />
            </div>
            <div class="input-group">
              <label>Password</label>
              <input id='password' type="password" />
            </div>
            <button onClick={props.submit} type="submit" class="login-button">Sign In</button>
        </div>
      </div>
    )
}


export default Login