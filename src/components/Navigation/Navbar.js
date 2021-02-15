import React from 'react'
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from 'react-router-dom';


const useStyles =  makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        marginRight: "auto",
      },
}))


export const Navbar = ({setOpen}) => {
    const classes = useStyles()
    return (
        <AppBar position="static" color="secondary">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} onClick={() => setOpen(true)}  color="inherit"> 
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                Colinshifts
            </Typography>
            <Button component={Link} to="/shifts" color="inherit">New Shift</Button>
            </Toolbar>
        </AppBar>
    )
}
