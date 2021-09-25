import React, { useContext } from 'react';
import {AuthContext} from "./Auth";
import './App.css';
import Container from 'react-bootstrap/Container'
import { makeStyles } from '@material-ui/core/styles';
import Cards from "./Cards"
import Popup from './Popup'
import {useEffect} from "react";



const useStyles = makeStyles({
  root :{
    display:'flex',
    flexDirection: 'column',
    gap: '8px'
  }
})

export default function Home({tokens}) {
  const classes = useStyles();
  const { user } = useContext(AuthContext)
  useEffect(() => {

 
   
      
    

    },[])

    return (
          
        <Container className={classes.root} style={{position: 'relative', zIndex: '1', paddingTop:'90px'}} >
           {user.map(p => {
             return (<Cards key={p.key}
                    title = {p.product}
                    user  = {p.user}
                    token = {p.token}
                    />)
}
             )}
        
        <Popup />
      </Container>
      
    )
    
}