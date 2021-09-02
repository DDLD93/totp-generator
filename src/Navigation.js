import React, { useContext } from 'react';
import {AuthContext} from './Auth'
import Navbar from 'react-bootstrap/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Nav from 'react-bootstrap/Nav'
const useStyles = makeStyles({
  root: {
    position: 'fixed',
    zIndex: '5',
    width: '100%'
  }
});

function Navigation() {
  const classes = useStyles();
  const {logout} = useContext(AuthContext)
    return (
<Navbar className={classes.root} bg="primary" variant='dark' expand="sm">
  <Navbar.Brand href="#">Authenticator</Navbar.Brand>
  <Navbar.Toggle  />
   <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '150px' }}>
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/notes">Settings</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link onClick={logout} >Log Out</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    
</Navbar>
      
    )
}

export default Navigation
