import { Divider, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
}))

export const ListLinks = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.toolbar} />
            <Divider />
            <List disablePadding className={classes.drawer}>
                <ListItem button>
                <ListItemText primary="First Item" />
                </ListItem>
                <ListItem button>
                <ListItemText primary="Second Item" />
                </ListItem>
            </List>
        </>
    )
}
