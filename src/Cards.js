import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import Progress from './Progress';
import ClearIcon from '@mui/icons-material/Clear';


const useStyles = makeStyles({
    root: {
      maxWidth: '250px',
      boxShadow: '5px 10px 20px 0px #cbc4d7'
    },
    body: {
        padding:'0.7rem'
    },
    title: {
        fontSize: '25px',
        marginBottom: '0.50rem',
        fontWeight: '800px',
        letterSpacing: '1px'
    },
    subtitle: {
        fontSize: '15px'
    },
    token: {
        letterSpacing: '7px'
    },
    progress: {
        position: 'absolute',
        color: 'red',
        backgroundColor: 'red'
    }
  });
function Cards({title,user,token,copyToken}) {
    const classes = useStyles();
    
   
   
    return (
        
        <Card className={classes.root} variant="outlined"
            onClick={copyToken}>
            <Card.Body className={classes.body}>
                <div style={{display:'flex', justifyContent:"space-between"}}>
                <Card.Title className={classes.title}>{title}</Card.Title>
                <ClearIcon style={{visibility:'hidden'}} />
                </div>
                <Card.Subtitle className={classes.subtitle}>{user}</Card.Subtitle>
                <Card.Text className='token' >{token} <Progress/></Card.Text>
            </Card.Body>
            
        </Card>
        
    )
}
export default Cards
