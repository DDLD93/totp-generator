
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
  const [coder, setcoder] = useState(0);
 const items = [];
 
 

  

  function getdata() {
    db.get().then((querySnapshot) => {
      setUser([])
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
     
      
    }).then(() => {
     items.forEach((e) => {
        const object = e
        fetch(`http://localhost:5500/auth/${e.key}`).then((res) => {
          res.text().then((e) => {
            object.code = e
            setUser(prevuser => [...prevuser, object])
    })
        })
      })
    })     
  }

  function iterate() {
    user.map((e) => console.log(e))
    
  }

  useEffect(() => {
  getdata()
  setInterval(() => {
    iterate()
    }, 5000);
}, [])
    
 
  
  
  
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
