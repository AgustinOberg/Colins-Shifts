import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, Paper} from '@material-ui/core'
import {LoginForm} from './LoginForm'

const useStyles = makeStyles({
  bgImage:{
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  formContainer:{
    display:'flex',
    justifyContent:'center'
  },
  
})





export const LoginPage = () => {
  const classes = useStyles()
  
  return (
    <Grid container component="main" style={{height: "100vh"}}>
      <Grid item xs={false} sm={4} md={7} className={classes.bgImage}>                   {/*  Image  */}

      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={24} square className={classes.formContainer}>                                           {/*  Login  */}
       <LoginForm/>
      </Grid>
    </Grid>
  )
}
