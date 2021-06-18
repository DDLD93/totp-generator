import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette.text.primary,
      paddingLeft: '10px'
    },
  }));

function Token() {
    const classes = useStyles();
    return (
    <div className="App">
 <Container className="main-container" fluid>
  <Row>
    <Col className="col-container" >234893
 </Col>
 </Row>
 <Grid container className={classes.root}>
      <Grid item xs={4}>
      <Grid item xs={8}>
        <DeleteIcon />
      </Grid>
      </Grid>
</Grid>
</Container>



    </div>
    )
}

export default Token
