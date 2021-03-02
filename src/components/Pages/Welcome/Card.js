import React from 'react'
import { Typography, Avatar, Paper, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(()=>({
    mt : {
        marginTop:"10px"
    },
    paper : {
        display:"flex",
        minWidth:"10%",
        minHeight:"10%",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"3%", 
        margin:"3%"
    }
    
}))

export const Card = ({image, text}) => {
    const classes = useStyles()
    return (
        <Grid item sm={4} xs={12}>
        <Paper elevation={0} variant="outlined" className={classes.paper} >
            <Avatar alt="USERNAME" src={image} />
            <Typography variant="body1" color="initial" align="center" className={classes.mt} >
                {text}
            </Typography>
        </Paper>
      </Grid>
    )
}
