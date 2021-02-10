import { Typography, Container, Avatar, Paper, Grid } from '@material-ui/core'
import React from 'react'
import { PageBar } from '../../PageBar'

export const WelcomePage = () => {
    return (
            <>
                <PageBar title={"Welcome Page"} buttonRequired={true}/>
                <Container  style={{display:"flex", flexDirection: "column", alignItems:"center",marginTop:"10vh", height:"70vh"}}>
                <Avatar alt="USERNAME" src="/static/images/avatar/1.jpg" />
                  <Typography variant="subtitle1" align="center" color="initial">
                      Hi @username !
                  </Typography>
                    <Grid container spacing={1} style={{marginTop:"10vh"}}>
                      <Grid item xs={4}>
                      <Paper elevation={3} style={{display:"flex",minWidth:"10%",minHeight:"10%", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"3%", margin:"3%"}}>
                            <Avatar alt="USERNAME" src="/static/images/avatar/1.jpg" />
                            <Typography variant="body1" color="initial">
                                2131 shifts today
                            </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={4}>
                      <Paper elevation={3} style={{display:"flex",minWidth:"10%",minHeight:"10%", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"3%", margin:"3%"}}>
                            <Avatar alt="USERNAME" src="/static/images/avatar/1.jpg" />
                            <Typography variant="body1" color="initial">
                                2131 shifts today
                            </Typography>
                        </Paper>
                      </Grid>
                      <Grid item xs={4}>
                      <Paper elevation={3} style={{display:"flex",minWidth:"10%",minHeight:"10%", flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"3%", margin:"3%"}}>
                            <Avatar alt="USERNAME" src="/static/images/avatar/1.jpg" />
                            <Typography variant="body1" color="initial">
                                2131 shifts today
                            </Typography>
                        </Paper>
                      </Grid>
                    </Grid>     
                </Container>
            </>
    )
}
