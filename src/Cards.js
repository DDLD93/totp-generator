import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import Progress from './Progress'

const useStyles = makeStyles({
    root: {
      width: '80vw',
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
   
    return (
        
        <Card className={classes.root} variant="outlined"
            onClick={(e) => {
                
                if (e.target.classList.contains('token')) {
                  let alert =  document.querySelector(".alert");
                      alert.style.display = 'block'
                    setTimeout(()=>alert.style.display = 'none',2000)
                }
                }}>
            <Card.Body className={classes.body}>
                <Card.Title className={classes.title}>{props.title}</Card.Title>
                <Card.Subtitle className={classes.subtitle}>{props.user}</Card.Subtitle>
                <Card.Text className='token' >{props.token} <Progress/></Card.Text>
            </Card.Body>
            
        </Card>
        
    )
}

export default Cards
