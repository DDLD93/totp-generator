import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import firebase from "./Firebase"
import {app} from "./Firebase"
import Button from 'react-bootstrap/Button'
import {useState} from "react"

function Popup() {

  const [show, setShow] = useState(false);
  var [formdata, setdata] = useState([])
  const db = firebase.firestore(app).collection("auth");
  const handleClose = () => {
    if (formdata.user !== "" && formdata.product !== "" && formdata.key !== "") {
      
      db.doc(formdata.product).set({
        product: formdata.product,
        user: formdata.user,
        key: formdata.key
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
    }else {
      console.log("all fields are required");
    }
    setShow(false)};
  const handleShow = () => setShow(true);
  const typing = (e) => {

    
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
