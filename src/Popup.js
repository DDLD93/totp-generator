import React from 'react'
import  { useContext } from 'react';
import {AuthContext} from "./Auth";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import firebase from 'firebase'
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import Button from 'react-bootstrap/Button'
import {useState} from "react"


function Popup() {
  const { firebaseCall } = useContext(AuthContext)
  const [show, setShow] = useState(false);
  var [formdata, setdata] = useState(" ")
  const handleClose = () => {
    if (formdata.user !== undefined  && formdata.product !== undefined && formdata.key !== undefined) {
      
      const addProduct = firebase.functions().httpsCallable('addProduct');
      console.log(formdata)
      addProduct(formdata).then(e => {
        firebase.functions().httpsCallable('getdata')
        setShow(false)
        console.log('data added')
        firebaseCall()
      })
    }else {
      alert("all fields are required");
    }
    
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
        <AddCircleSharpIcon style={{position:'fixed',bottom:'10%',right:'5%',height:"60px",width:"60px"}} color='primary' variant="primary" onClick={handleShow}></AddCircleSharpIcon>
      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={true}
        style={{paddingTop:'60px'}}
      >
        <Modal.Header>
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
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default Popup
