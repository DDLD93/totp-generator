import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import Progress from './Progress';
import ClearIcon from '@mui/icons-material/Clear';
import Alert from 'react-bootstrap/Alert';

const useStyles = makeStyles({
    root: {
      maxWidth: '250px',
      border: '1px solid rgba(0,0,0,0.5)',
      boxShadow: '1px 1px 1px 1px #888888;'
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
function Cards(props) {
    const classes = useStyles();
    const [alert, setalert] = useState('none')
   
   
    return (
        
        <Card className={classes.root} variant="outlined"
            onClick={(e) => {
                
                if (e.target.classList.contains('token')) {
                  navigator.clipboard.writeText(e.target.innerText)
                  setalert('inline')
                  setTimeout(()=> setalert('none'),2000)
                }
                }}>
            <Card.Body className={classes.body}>
                <div style={{display:'flex', justifyContent:"space-between"}}>
                <Card.Title className={classes.title}>{props.title} <Alert style={{display:alert}}  className='alert' variant='success'>copied</Alert></Card.Title>
                <ClearIcon/>
                </div>
                <Card.Subtitle className={classes.subtitle}>{props.user}</Card.Subtitle>
                <Card.Text className='token' >{props.token} <Progress/></Card.Text>
            </Card.Body>
            
        </Card>
        
    )
}
export default Cards
