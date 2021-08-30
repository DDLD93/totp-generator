import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';


const useStyles = makeStyles({
    root: {
      width: '28rem',
      border: '1px solid rgba(0,0,0,0.5)',
      boxShadow: '1px 1px 1px 1px #888888;'
    },
    body: {
        padding:'0.7rem'
    },
    title: {
        fontSize: '25px',
        fontWeight: '800px',
        letterSpacing: '3px'
    },
    subtitle: {
        fontSize: '15px'
    },
    token: {
        letterSpacing: '7px'
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
                
                <Card.Text class='token' className={classes.token}>{props.token}</Card.Text>
            </Card.Body>
            </Card>
        
    )
}

export default Cards
