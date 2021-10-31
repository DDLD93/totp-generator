import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2),
      },
   },

}));

export default function Progress() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  var color = progress > 85 ? 'red' : 'blue'

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 0.83333333333));
    }, 250);
    

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
     <CircularProgress style={{color}} size ='27px' thickness={21} variant="determinate"  value={progress} />
    </div>
  ); 
}