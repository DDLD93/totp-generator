import './App.css';
import Container from 'react-bootstrap/Container'
import firebase from './Firebase'
import Cards from "./Cards"
import Popup from './Popup'
import {useEffect, useState} from "react";
import Alert from 'react-bootstrap/Alert'

export default function Home({tokens}) {
  
  
const [user, setuser] = useState([
  {product:'google',
    user:'umar.jere',
    token: 98765678 },
    {product:'google',
    user:'umar.jere',
    token: 1111111 },
    {product:'google',
    user:'umar.jere',
    token: 2222222 },
    {product:'google',
    user:'umar.jere',
    token: 98765678 },
    {product:'google',
    user:'umar.jere',
    token: 98765678 },
    {product:'google',
    user:'umar.jere',
    token: 98765678 },
    {product:'google',
    user:'umar.jere',
    token: 98765678 },
  ]);
  function getData() {
    firebase.auth().signInWithEmailAndPassword('umar.jere@gmail.com', '16001105')
    .then(user => {
      // console.log('logged in', user);
     
    })
    .catch(error => {
      
    });
    const getdata = firebase.functions().httpsCallable('getdata');
    //getdata().then(e => setuser(e.data))
  }
    
  useEffect(() => {
      getData()
      setInterval(() => {
        getData()
      }, 30000);
    

    },[])

    return (
          
        <Container style={{position: 'relative', zIndex: '1', paddingTop:'90px'}} >
        <Alert className='alert' style={{position:'fixed', zIndex:'1'}} variant='success'>copied 45678</Alert>
        
          
           {user.map((p, k) => {
             return (<Cards key={p.key}
                    title = {p.product}
                    user  = {p.user}
                    token = {p.token}
                    />
            )
             }
             )}
        
        <Popup />
      </Container>
      
    )
    
}