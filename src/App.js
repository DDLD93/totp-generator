
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigation from './Navigation';
import Cards from "./Cards"
import firebase from "./Firebase"
import {app} from "./Firebase"
import Popup from './Popup'
import { useEffect, useState} from "react"

function App() {
 
  const db = firebase.firestore(app).collection("auth");
  const [user, setUser] = useState([]);
  var key = ['qaugcothk42nv5tklz2v4l6s6h22iia','qaugcothk42nm5tklv2v4l6s6h22iia','baugcothk42nm5tklz2v4l6s6h22iia']
  
  
    // [START listen_document]
  function unsub() {
    fetch(`http://localhost:5500/auth/${key}`).then((response) => {
      //var temdata = JSON.parse(response)
     console.log(response.text());
      
    })
 }
             
            
            

 
  
  

    

 useEffect(() => {
   unsub();

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
