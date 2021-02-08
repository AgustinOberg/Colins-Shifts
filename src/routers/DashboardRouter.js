import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AdminPage } from '../components/Pages/AdminPage'
import { ShiftsPage } from '../components/Pages/ShiftsPage'
import { SupportPage } from '../components/Pages/SupportPage'
import { TeamPage } from '../components/Pages/TeamPage'
import { WelcomePage } from '../components/Pages/WelcomePage'

export const DashboardRouter = () => {
    return (
        <Switch>
            <Route path="/welcome" exact component={ WelcomePage }/>
            <Route path="/admin" exact component={ AdminPage }/>
            <Route path="/team" exact component={ TeamPage }/>
            <Route path="/shifts" exact component={ ShiftsPage }/>
            <Route path="/support" exact component={ SupportPage }/>
            <Redirect to="/welcome" />
        </Switch>
    )
}
