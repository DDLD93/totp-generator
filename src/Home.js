import React, { useContext } from 'react';
import {AuthContext} from "./Auth";
import './App.css';
import Container from 'react-bootstrap/Container'
import { makeStyles } from '@material-ui/core/styles';
import Cards from "./Cards"
import Popup from './Popup'
import {useEffect} from "react";

import Alert from 'react-bootstrap/Alert';

const useStyles = makeStyles({
  root :{
    display:'flex',
    flexDirection: 'column',
    gap: '8px'
  }
})

export default function Home({tokens}) {
  const classes = useStyles();
  const { user, login, logout, authReady } = useContext(AuthContext)
  useEffect(() => {

 
   
      
    

    },[])

    return (
          
        <Container className={classes.root} style={{position: 'relative', zIndex: '1', paddingTop:'90px'}} >
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