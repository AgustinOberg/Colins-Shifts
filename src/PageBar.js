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
                </Typography>   {console.log(buttonRequired)}
               
            
                {buttonRequired!==undefined &&(
                 buttonRequired?(<Button color="secondary" variant="contained">
                    Generate new Shift
                </Button>) : (
                    <form style={{display:"flex", flexDirection:"row"}} onSubmit={handleSubmit}>
                        <TextField  label="Search" variant="outlined" color="secondary" value={inputText} style={{width:"100%"}} onChange={handleInputChange} />
                    </form>
                ))}
                
                </Toolbar>
      
        </Hidden>
    )
}
