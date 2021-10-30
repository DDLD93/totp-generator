import React from 'react'
import {BrowserRouter as  Router,Switch,Route} from "react-router-dom";
import Home from './Home'
import About from './About'
import MenuAppBar from './Navigation';

function Layout() {
    return (
        <div>
            
        <Router>
             <MenuAppBar className='umar'/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About} />
            </Switch>
        </Router>
        </div>
    )
}

export default Layout
