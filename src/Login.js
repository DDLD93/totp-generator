import { useEffect } from "react"
import firebase from "firebase/app";
import 'firebase/auth'



function Login(props) {

  
  useEffect(() => {
    
  }, [])
    

    return (
     <div className="full-screen-container">
        <div className="login-container">
          <h3 cclassName="login-title">Welcome</h3>
          <div className="input-group">
              <label>Email</label>
              <input id='email' type="email" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input id='password' type="password" />
            </div>
            <button onClick={props.submit} type="submit" class="login-button">Sign In</button>
        </div>
      </div>
    )
}


export default Login