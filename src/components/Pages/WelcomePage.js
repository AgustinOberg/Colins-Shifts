import { Typography, Container, Avatar, Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import { PageBar } from '../../PageBar'
import {Card} from '../Pages_Fragments/WelcomePage/Card'

const useStyles = makeStyles(()=>({
    container : {
        display:"flex", 
        flexDirection: "column", 
        alignItems:"center",
        marginTop:"10vh", 
        height:"70vh"
    }
}))

export const WelcomePage = () => {
    const classes = useStyles()
    return (
            <>
                <PageBar title={"Welcome Page"} buttonRequired={true}/>
                <Container  className={classes.container}>
                <Avatar alt="USERNAME" src="/static/images/avatar/1.jpg" />
                  <Typography variant="subtitle1" align="center" color="initial">
                      Hi @username !
                  </Typography>
                    <Grid container spacing={1} style={{marginTop:"10vh"}}>

                     <Card text={'This is the colins power'} image="/static/images/avatar/1.jpg"/>
                     <Card text={'This is the colins power'} image="/static/images/avatar/1.jpg"/>
                     <Card text={'This is the colins power'} image="/static/images/avatar/1.jpg"/>
                     
                    </Grid>     
                </Container>
            </>
    )
}
