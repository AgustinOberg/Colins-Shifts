import React from 'react'

import { Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar

}))

export const ListLinks = ({setOpen}) => {
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
        }
    ]
    return (
        <>
            <div className={classes.toolbar} style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                <Typography variant="button" color="initial">
                  ColinShifts  
                </Typography>
                <Typography variant="caption" color="initial">
                  Username  
                </Typography>
            </div>
            <Divider />
            <List disablePadding className={classes.drawer}>
                    {routes.map((item)=>(
                    <ListItem button component={Link} to={item.route} key={item.route} onClick={() => setOpen(false)}>
                        <ListItemText primary={item.title} />
                    </ListItem>
                    ))}
                    
         
               
            </List>
        </>
    )
}
