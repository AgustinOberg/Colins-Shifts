import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { PageBar } from '../../Navigation/PageBar'
import {TeamCard} from '../Team/TeamCard'
import { Container,  Grid } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    root: {
      width: 275,
      margin:"2%"
    },
    myAlign:{
        [theme.breakpoints.down('sm')]: {
            display:"flex", 
            justifyContent:"center", 
            alignItems:"center"
          },
    }
  }));
  
  export const TeamPage = () => {
    const classes = useStyles();
    return (
        <>
        <PageBar title={"Teams Page"} buttonRequired={true} />
        <Container>
        <Grid container component="main" className={classes.myAlign}>
            <Grid item lg={6} md={6} sm={12} xl={4}>              
                <Card className={classes.root} variant="outlined">

                        <TeamCard name="Agustin Aguilera" title="Programador" number="1123890018" image="https://techcommunity.microsoft.com/t5/image/serverpage/image-id/217078i525F6A9EF292601F/image-size/large?v=1.0&px=999"/>
                
                </Card>
            </Grid>
           
        </Grid>
        </Container>
      </>
    );
    
}
