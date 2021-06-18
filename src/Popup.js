import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useState} from "react"

function Popup() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <Form.Control type="text" placeholder="Product" />
          <br />
          <Form.Control type="text" placeholder="username" />
          <br />
          <Form.Control type="text" placeholder="Security Keys" />
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
