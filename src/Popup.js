import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import firebase from "./Firebase"
import Button from 'react-bootstrap/Button'
import {useState} from "react"


function Popup() {

  const [show, setShow] = useState(false);
  var [formdata, setdata] = useState(" ")
  const handleClose = () => {
    if (formdata.user !== undefined  && formdata.product !== undefined && formdata.key !== undefined) {
      
      const addKey = firebase.functions().httpsCallable('addKey');
      addKey(formdata).then(e => console.log('keysadded'))
    }else {
      alert("all fields are required");
    }
    setShow(false)
  };
  const handleShow = () => setShow(true);
 function typing(e) {
   if (e.target.placeholder === 'Product') {
      setdata(prevdata => ({...prevdata, product:e.target.value }))
      console.log(e.target.placeholder);
    }
    if (e.target.placeholder === 'username') {
      setdata(prevdata => ({...prevdata, user:e.target.value }))
      console.log(e.target.placeholder);
    }
    if (e.target.placeholder === 'Security Keys') {
      setdata(prevdata => ({...prevdata, key:e.target.value }))
      console.log(e.target.placeholder);
    }
    console.log(formdata);
  }
    return (
        <>
      <Button className="button" variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Key</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group>
          <Form.Control onChange={typing} type="text" placeholder="Product" />
          <br />
          <Form.Control onChange={typing} type="text" placeholder="username" />
          <br />
          <Form.Control onChange={typing} type="text" placeholder="Security Keys" />
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>Set</Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default Popup
