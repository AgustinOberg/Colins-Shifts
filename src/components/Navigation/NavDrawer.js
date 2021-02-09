import React, { useState } from "react";
import { Typography, Drawer, List, ListItem, ListItemText, Hidden, Divider} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "./Navbar";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth }
  },
  title: {
    marginRight: "auto"
  },
  drawer: {
    width: drawerWidth
  },
  content: {
    padding: theme.spacing(0, 3)
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  }
}));

export const NavDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const drawerItems = (
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
  );
  return (
    <>
      <div className={classes.root}>
        {/* Drawer for small devices */}
        <Hidden smUp implementation="css">
          <Drawer open={open} > {/* onClose={() => setOpen(false)}     TODO when Redux created */}
            {drawerItems}
          </Drawer>
        </Hidden>
        {/* Drawer for large devices */}
        <Hidden xsDown implementation="css">
          <Drawer open={open} variant="permanent" > {/* onClose={() => setOpen(false)}   TODO when Redux created*/}
            {drawerItems}
          </Drawer>
        </Hidden>
      </div>
        <Navbar setOpen={setOpen}/>
    </>
  );
};

