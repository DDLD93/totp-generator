
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import socketIOClient from "socket.io-client";
import Navigation from './Navigation';
import Cards from "./Cards"
import Popup from './Popup'
import {useEffect, useState} from "react"


function App() {
 const [user, setUser] = useState([]);
  


 
  
 useEffect(() => {
  const socket = socketIOClient('http://localhost:5500');
  socket.on("hello", (arg) => {
    //console.log(arg); // world
  });
  socket.on('data', (e) => {
    setUser(e)
    //console.log(e)
  })

  setInterval(() => {
    socket.emit('rerender')
    //console.log('rerender client side');
    
  }, 30000);
 },[])
  
  
  
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
