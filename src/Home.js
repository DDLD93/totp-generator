import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import firebase from './Firebase'
import Cards from "./Cards"
import Popup from './Popup'
import {useEffect, useState} from "react"

export default function Home() {
  
  
const [user, setuser] = useState([]);

  function getData() {
    firebase.auth().signInWithEmailAndPassword('umar.jere@gmail.com', '16001105')
    .then(user => {
      console.log('logged in', user);
     
    })
    .catch(error => {
      
    });
    const tokenRequest = firebase.functions().httpsCallable('tokenRequest');
    tokenRequest().then(e => console.log(e))
  }
    
  useEffect(() => {
      getData()
      setInterval(() => {
        getData()
      }, 30000);
    

    },[])

    return (
        <div>
        <Container style={{position: 'relative', zIndex: '1', paddingTop:'90px'}} fluid>
        <Row>
          <Col>
          
           {user.map((p, k) => {
             return (<div >
             <Cards title = {p.product}
                    user  = {p.user}
                    token = {p.code}
                    key = {k}/>
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