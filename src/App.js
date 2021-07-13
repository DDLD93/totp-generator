import Home from './Home'
import Notes from './Notes'
import About from './About'
import './App.css';
import Navigation from './Navigation';
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";



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
            <Notes/>
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
