import React from 'react'

import { Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {startLogout } from '../../actions/auth';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar

}))

export const ListLinks = ({setOpen}) => {
    const username = useSelector(state => state.auth.name)
    const dispatch = useDispatch()
    const classes = useStyles()
    const routes = [{
            route: '/welcome',
            title: 'Home',
            icon: <HomeIcon/>,
        },
        {
            route: '/shifts',
            title: 'Shifts',
            icon: <AssignmentTurnedInIcon/>,
        },
        {
            route: '/admin',
            title: 'Manage',
            icon: <CalendarTodayIcon/>,
        },
        {
            route: '/team',
            title: 'Team',
            icon: <GroupWorkIcon/>,
        },
        {
            route: '/register',
            title: 'New STAFF',
            icon: <GroupAddIcon/>,
        }

    ]
    return (
        <>
            <div className={classes.toolbar} style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                <Typography variant="button" color="initial">
                  ColinShifts  
                </Typography>
                <Typography variant="caption" color="initial">
                  {username}  
                </Typography>
            </div>
            <Divider />
            <List disablePadding className={classes.drawer}>
          
                    {routes.map((item)=>(
                        <ListItem button component={Link} to={item.route} key={item.route} onClick={() => setOpen(false)}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
                    ))}
             
                <Divider/>
                <ListItem button key={"logoutButton"} onClick={() => dispatch(startLogout())}>
                    <ListItemText primary={"Logout"} />
                </ListItem>
            </List>
        </>
    )
}
