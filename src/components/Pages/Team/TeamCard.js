import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CardContent } from '@material-ui/core'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import Typography from '@material-ui/core/Typography';
import {  Avatar, List, ListItemIcon, ListItemText } from '@material-ui/core';
import { ListItemLink} from '../../Pages/Team/ListItemLink';

const useStyles = makeStyles(theme=>({
    pos: {
      marginBottom: 12,
      color: theme.palette.secondary.main
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
  }));

  const hrefList = (myNumber) =>{
    return `https://wa.me/+54${myNumber}`
}
export const TeamCard = ({name, title, number, image}) => {
    const classes = useStyles();
    return (
        <CardContent style={{display:'flex', flexDirection:"column", alignItems:"center"}}>
            <Avatar alt="USERNAME"  src={image} className={classes.large} />        
                <div style={{alignSelf:"flex-start"}}>
                    <Typography variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {title}
                    </Typography>
                    <List>
                    <ListItemLink href={hrefList(number)} >
                        <ListItemText/>
                            <ListItemIcon>
                                <PhoneAndroidIcon/>
                            </ListItemIcon>
                            <ListItemText primary={number} />
                    </ListItemLink>
                            
                    </List>
                </div>
        </CardContent>
    )
}
