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
const data = []
  
    async function getMarker() {
      
      const snapshot = await firebase.firestore().collection('auth').get();
      snapshot.docs.forEach(doc => data.push(doc.data()));
      fetchdata(data)
      return setuser(data)
    }
   
function fetchdata(params) {
  const node = JSON.stringify(params)
  fetch(`http://3.68.169.52:4200/${node}`).then((res) =>{
   res.json().then(e => {
     console.log(e)
     setuser(e)
   })
  })
}
  useEffect(() => {
      getMarker()
      setInterval(() => {
        fetchdata(data)
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