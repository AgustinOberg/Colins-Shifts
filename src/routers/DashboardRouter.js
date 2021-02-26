import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AdminPage } from '../components/Pages/AdminPage'
import { ShiftsPage } from '../components/Pages/ShiftsPage'
import { SupportPage } from '../components/Pages/SupportPage'
import { TeamPage } from '../components/Pages/TeamPage'
import { WelcomePage } from '../components/Pages/WelcomePage'

import { makeStyles } from '@material-ui/core'
import { Register } from '../components/Pages/Register'

const drawerWidth = 250
const useStyles = makeStyles((theme)=>({
    content: {
        padding: theme.spacing(1, 3)
      },
      root: {
        [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth }
      },
      toolbar: theme.mixins.toolbar,
}))


export const DashboardRouter = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            
            <main className={classes.content}>
            <Switch>
                <Route path="/welcome" exact component={ WelcomePage }/>
                <Route path="/admin" exact component={ AdminPage }/>
                <Route path="/team" exact component={ TeamPage }/>
                <Route path="/shifts" exact component={ ShiftsPage }/>
                <Route path="/support" exact component={ SupportPage }/>
                <Route path="/register" exact component={Register} />
                <Redirect to="/welcome" />
            </Switch>
            </main>
        </div>
    )
}
