import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AdminPage } from '../components/Pages/Manage/AdminPage'
import { ShiftsPage } from '../components/Pages/Shifts/ShiftsPage'
import { TeamPage } from '../components/Pages/Team/TeamPage'
import { WelcomePage } from '../components/Pages/Welcome/WelcomePage'

import { makeStyles } from '@material-ui/core'
import { Register } from '../components/Pages/Staff/Register'

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
                <Route path="/register" exact component={Register} />
                <Redirect to="/welcome" />
            </Switch>
            </main>
        </div>
    )
}
