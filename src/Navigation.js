import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//import NavDropdown from 'react-bootstrap/NavDropdown'
//import Form from 'react-bootstrap/Form'
//import FormControl from 'react-bootstrap/FormControl'
//import Button from 'react-bootstrap/Button'

function Navigation() {
    return (
        <div style={{position: 'fixed', zIndex: '2', width:'100vw'}}>
<Navbar bg="primary" variant='dark' expand="lg">
  <Navbar.Brand href="#">Authenticator</Navbar.Brand>
  <Navbar.Toggle  />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      >
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Notes Keep</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navigation
