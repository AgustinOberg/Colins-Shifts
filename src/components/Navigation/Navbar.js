import React from 'react'
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";

const useStyles =  makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        marginRight: "auto",
      },
}))


export const Navbar = () => {
    const classes = useStyles()
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit"> {/*onClick={() => setOpen(true)}       TODO when Redux created*/ } 
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Colinshifts
            </Typography>
            <Button color="inherit">LOGOUT</Button>
            </Toolbar>
        </AppBar>
    )
}
