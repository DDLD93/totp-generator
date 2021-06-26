
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigation from './Navigation';
import Cards from "./Cards"
import firebase from "./Firebase"
import {app} from "./Firebase"
import Popup from './Popup'
import {getToken} from './Token'
import { useEffect, useState, useMemo} from "react"

function App() {
 
  const db = firebase.firestore(app).collection("auth");
  const [user, setUser] = useState([]);
  const [coder, setcoder] = useState([]);
  const newUser = []
  const items = [];
  

  function getdata() {
    db.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
  })
  setUser(items)
      })         
  }
 
   console.log(getToken('dssunjmvd'));


    

useEffect(() => {
  getdata()
  
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
