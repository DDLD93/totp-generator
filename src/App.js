
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
  const [coder, setcoder] = useState([]);
  
 
  
  function getcode(params) {
    fetch(`http://localhost:5500/auth/${params}`).then((response) => {
      //var temdata = JSON.parse(response)
      response.text().then((e) => {
        return e
       
      })
  })
  }

  function getdata() {
    db.get().then((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUser(items);
      //console.log(user)
    }).then(() => {
      console.log(user)
    });           
    
   }
  
    // [START listen_document] 
function unsub() {
   
    getdata()
    console.log(getcode(user.code));
}
   
  
  
   
          
 
 
  
  

    

 useEffect(() => {
   unsub()
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
              token = {getcode(p.code)}
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
