import React, { useState } from "react";
import { Drawer, Hidden} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Navbar } from "./Navbar";
import { ListLinks } from "./ListLinks"

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth }
  },
}));

export const NavDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <div className={classes.root}>
        {/* Drawer for small devices */}
        <Hidden smUp implementation="css">
          <Drawer open={open} onClose={() => setOpen(false)} > 
            <ListLinks setOpen={setOpen}/>
          </Drawer>
        </Hidden>
        {/* Drawer for large devices */}
        <Hidden xsDown implementation="css">
          <Drawer open={open} variant="permanent" onClose={() => setOpen(false)} > 
            <ListLinks setOpen={setOpen}/>
          </Drawer>
        </Hidden>
        <Hidden only={['xl','lg', 'md', 'sm']} implementation="css">
          <Navbar setOpen={setOpen} isOpen = {open}/>
        </Hidden>
          
      </div>
    </>
  );
};

