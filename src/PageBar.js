import React, { useState } from 'react'
import {  Button, Hidden, makeStyles, Toolbar, Typography, TextField, FormControl } from '@material-ui/core'

const useStyles =  makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        marginRight: "auto",
      },
}))


export const PageBar = ({title,buttonRequired}) => {
    const [inputText, setInputText] = useState("")
    const classes = useStyles()
    const handleInputChange = (e) =>{
        setInputText(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    } 
    return (
        <Hidden only={'xs'} implementation="css">
   
                <Toolbar>
                <Typography variant="h4" className={classes.title}>
                    {title}
                </Typography>
               
            
                {(
                 buttonRequired&&(<Button color="secondary" variant="contained">
                    Generate new Shift
                </Button>))}
                
                </Toolbar>
      
        </Hidden>
    )
}
