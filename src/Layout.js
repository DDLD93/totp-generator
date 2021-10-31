import React, { useContext } from 'react';
import {AuthContext} from './Auth'
import {BrowserRouter as  Router,Switch,Route} from "react-router-dom";
import Home from './Home'
import About from './About'
import Login from './Login'
import MenuAppBar from './Navigation';

function Layout() {
    const {authReady} = useContext(AuthContext)
    return (
        <div>
            
        <Router>
             {authReady&& <MenuAppBar className='umar'/>}
            <Switch>
                <Route exact path="/" component={authReady?Home:Login}/>
                <Route path="/about" component={authReady?About:Login} />
            </Switch>
        </Router>
        </div>
    )
}

export default Layout
