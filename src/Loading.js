import React from 'react'
import Icons from './Icon'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'
    },
})
function Loading() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Icons/>
        </div>
    )
}

export default Loading
