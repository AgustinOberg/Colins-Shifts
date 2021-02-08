import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

export const LoginForm = () => {

    const useStyles = makeStyles({
          submit:{
              marginTop:"15px"
          }     
      });
    
    const classes = useStyles()
    return (
        <form className={classes.form} noValidate>
              <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="off" autoFocus/>
              <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password"/>
     
              <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                Login
              </Button>

        </form>
    )
}
