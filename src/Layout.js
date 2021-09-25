import React from 'react'
import {BrowserRouter as  Router,Switch,Route} from "react-router-dom";
import Navigation from './Navigation';
import Home from './Home'
import Settings from './Settings'
import About from './About'

function Layout() {
    return (
        <div>
            <Navigation className='umar'/>
        <Router>
            <Switch>
               <Route path="/about" component={About} />
                
               <Route path="/Settings" component={Settings} />
                
               <Route exact path="/" component={Home}/>
            </Switch>
        </Router>
        </div>
    )
}

export default Layout
