
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import socketIOClient from "socket.io-client";
import Navigation from './Navigation';
import Cards from "./Cards"
import firebase from "./Firebase"
import {app} from "./Firebase"
import Popup from './Popup'
import { useEffect, useState} from "react"
import { Socket } from 'socket.io';

function App() {
 
  const db = firebase.firestore(app).collection("auth");
  const [user, setUser] = useState([]);
  const [coder, setcoder] = useState(true);
 const items = [];

 
  
 useEffect(() => {
  //  setInterval(() => {
  //   socket.emit('render');
  //   console.log('render');
  //   setcoder(!coder)
  //  },10000)
  const socket = socketIOClient('http://localhost:5500');
  socket.on("hello", (arg) => {
    
    console.log(arg); // world
  });
  socket.on('data', (e) => {
    setUser(e)
    console.log(e)
  })
 }

 ,[])
  
  
  
  return (
 <div>
   <Navigation className='umar'/>
   <Container style={{position: 'relative', zIndex: '1', paddingTop:'90px'}} fluid>
  <Row>
    <Col>
    
     {user.map(p => {
       return (<div >
       <Cards title = {p.product}
              user  = {p.user}
              token = {p.code}
              key = {p.id}/>
       </div>)
       }
       )}
     
   </Col>
  </Row>
  <Popup />
</Container>
 </div>
  )
}
export default App;
