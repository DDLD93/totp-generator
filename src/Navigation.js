import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Navigation() {
    return (
        <div style={{ marginBottom: '15px', position: 'fixed', zIndex: '2', width:'100vw'}}>
<Navbar bg="primary" variant='dark' expand="lg">
  <Navbar.Brand href="#">Authenticator</Navbar.Brand>
  <Navbar.Toggle  />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/notes">Notes Keep</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navigation
