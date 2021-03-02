import React from 'react'
import {  Button, Hidden, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';

const useStyles =  makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        marginRight: "auto",
      },
}))
export const PageBar = ({title,buttonRequired}) => {
    
    const classes = useStyles()
  
    return (
        <Hidden only={'xs'} implementation="css">
   
                <Toolbar>
                <Typography variant="h4" className={classes.title}>
                    {title}
                </Typography>
               
            
                {(
                 buttonRequired&&(<Button component={Link} to="/shifts" color="secondary" variant="contained">
                    Generate new Shift
                </Button>))}
                
                </Toolbar>
      
        </Hidden>
    )
}
