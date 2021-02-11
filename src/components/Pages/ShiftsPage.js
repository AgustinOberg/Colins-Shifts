import React, { useState } from 'react'
import { PageBar } from '../../PageBar'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles((theme)=>({
    field: {
        [theme.breakpoints.down('sm')]: {
            width: "100%"
          },
          [theme.breakpoints.up('md')]: {
            width: "70%"
          },
          [theme.breakpoints.up('lg')]: {
           width:"50%"
          },
    }
})) 

export const ShiftsPage = () => {
    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const professions = ['Test', 'Test2', 'Test3', 'Test4']
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };

    const classes = useStyles()
    return (
        <>
       <PageBar title={"Shifts Page"} />
       <Container style={{display:"flex", justifyContent:"center"}}>
        
            <Paper component={"form"} style={{padding:"20px",width:"70%", display:"flex", flexDirection:"column", alignItems: "center"}}>
                <TextField label="Dni" value={dni} type="number" className={classes.field} style={{  marginTop:'2%' }} onChange={e=>(setDni(e.target.value))} />
                <TextField label="Name" value={name} className={classes.field} style={{  marginTop:'2%' }} onChange={e=>(setName(e.target.value))} />
                <Autocomplete id="select-profession" options={professions} className={classes.field} getOptionLabel={(option) => option} style={{marginTop:'2%' }} renderInput={(params) => <TextField {...params} label="Profession"  />}/>
        </Paper>
        </Container>
        </>
    )
}
