import React, { useContext,useState } from 'react';
import {AuthContext} from "./Auth";
import Container from 'react-bootstrap/Container'
import { makeStyles } from '@material-ui/core/styles';
import Cards from "./Cards"
import Popup from './Popup'
import Alert from 'react-bootstrap/Alert';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';



const useStyles = makeStyles({
  root :{
    display:'flex',
    flexDirection: 'column',
    gap: '8px',
    position: 'relative', 
    zIndex: '1',
    paddingTop:'90px',
    paddingBottom:'20px'
  },
  alert:{
    textAlign:'center',
    position:'fixed',
    bottom:'0%',
    left:'50%'
  },
  stack:{
    paddingLeft:'20px',
    paddingTop:'100px'
  }
})

export default function Home() {
  const classes = useStyles();
  const { user } = useContext(AuthContext)
  const [alert, setalert] = useState('none')
  const [checked, setChecked] = useState(true);
  function copyToken(e) {
    console.log('clicked token')
    if (e.target.classList.contains('token')) {
      navigator.clipboard.writeText(e.target.innerText)
      setalert('inline')
      setTimeout(() => {
        setalert('none')
      }, 2000);
    }
  }
  
    return (
          <div>

              {user.length !== 0?
              
            <Box sx={{ display: 'flex' }}>
              {/* Conditionally applies the timeout prop to change the entry speed. */}
              <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0' }}
                {...(checked ? { timeout: 1000 } : {})}>
                  <div>
                  <Container className={classes.root}>
                    {user.map(p => {
                      return (<Cards key={p.key}
                              title = {p.product}
                              user  = {p.user}
                              token = {p.token}
                              copyToken={copyToken}
                              />)}
                      )}
                  <Popup />
                  <Alert style={{display:alert}} className={classes.alert} variant='success'>copied</Alert>
                </Container>
                </div>
              </Grow>
            </Box>
            :(
              <Stack className={classes.stack} spacing={2}>
                <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
                <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
                <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
                <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
                <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
                <Skeleton animation="wave" variant="rectangular" width={210} height={118} />
              </Stack>
                )}
          </div>
      
    )
    
}