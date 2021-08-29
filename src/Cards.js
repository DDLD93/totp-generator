import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      border: '1px solid rgba(0,0,0,0.5)',
      gap:'1px'
    },
    body: {
        padding:'1px'
    },
    title: {
        fontSize: '40px',
        fontWeight: '400px'
    },
    subtitle: {
        fontSize: '20px'
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
                }} style={{ width: '18rem', marginTop: '3px' }}>
            <Card.Body>
                <Card.Title className={classes.title}>{props.title}</Card.Title>
                <Card.Subtitle className={classes.subtitle}>{props.user}</Card.Subtitle>
                
                <Card.Text class='token' className={classes.token}>{props.token}</Card.Text>
            </Card.Body>
            </Card>
        
    )
}

export default Cards
