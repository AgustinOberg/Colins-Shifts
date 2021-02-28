import React, { useMemo } from 'react'

import { Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/auth';



const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar

}))

export const ListLinks = ({setOpen}) => {
    const username = useSelector(state => state.auth.name)
    const dispatch = useDispatch(logout)
    const classes = useStyles()
    const routes = [{
            route: '/welcome',
            title: 'Home'
        },
        {
            route: '/shifts',
            title: 'Shifts'
        },
        {
            route: '/admin',
            title: 'Manage'
        },
        {
            route: '/team',
            title: 'Team'
        },
        {
            route: '/register',
            title: 'New STAFF'
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
                        <ListItemText primary={item.title} />
                    </ListItem>
                    ))}
             
                <Divider/>
                <ListItem button key={"logoutButton"} onClick={() => dispatch(logout())}>
                    <ListItemText primary={"Logout"} />
                </ListItem>
            </List>
        </>
    )
}
