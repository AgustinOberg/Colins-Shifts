import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { PageBar } from '../../PageBar'
import {TeamCard} from '../Pages_Fragments/TeamsPage/TeamCard'
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

                        <TeamCard name="Agustin Aguilera" title="Programador" number="1123890018"/>
                
                </Card>
            </Grid>
           
        </Grid>
        </Container>
      </>
    );
    
}
