import React from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Switch
  } from "react-router-dom";

import { LoginPage } from '../components/Pages/Auth/LoginPage';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
import { NavDrawer } from '../components/Navigation/NavDrawer'
import { makeStyles } from '@material-ui/core';


const drawerWidth = 250

const useStyles = makeStyles((theme)=>({
    root: {
        [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth }
      },
}))  

export const AppRouter = () => {
    const isAuthenticated = true
    const classes = useStyles()
    return (
        <Router>
            <div>
                {isAuthenticated? ( 
                    <>
                    <NavDrawer className={classes.root}/>
                    <Switch>
                        <PrivateRouter path="/" component={ DashboardRouter } isAuthenticated={isAuthenticated}/>
                    </Switch>
                    </>
                    )
                    
                    :(
                        <Switch>
                            <PublicRouter path="/login" exact component={ LoginPage } isAuthenticated={isAuthenticated}/>
                            <Redirect to="/login" />
                        </Switch>
                        
                    
                    ) 
                }
                <Switch>
                    
                <Redirect to="/"/>
                </Switch>
               
            </div>
        </Router>
    )
}
