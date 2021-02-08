
import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { LoginForm } from './LoginForm';

export const LoginPage = () => {
    const useStyles = makeStyles({
        root: {
            height: '100vh'
        },
        image: {
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          },
          paper:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: "9em",
            marginLeft: "30px",
            marginRight: "30px"
          },
          avatar:{
              margin: "15px"
          },    
      });

    const classes = useStyles()

    return (
        <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <PermIdentityIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <LoginForm buttonClass={classes.submit}/>
          </div>
        </Grid>
      </Grid>
    )
}
