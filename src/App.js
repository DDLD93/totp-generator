import Home from './Home'
import Notes from './Notes'
import About from './About'
import './App.css';
import Navigation from './Navigation';
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { render } from '@testing-library/react';
//import { getAuth, signInWithPhoneNumber } from "firebase/auth";


function App() {
 
  
  
  return (
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
  )
}
export default App;
