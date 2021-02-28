import React, { useState } from 'react'
import { PageBar } from '../../PageBar'
import {useDispatch} from 'react-redux'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import moment from "moment";
import { makeStyles, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import {DatePicker} from '@material-ui/pickers'

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
    },
    form: {
        padding:"20px",
        display:"flex", 
        flexDirection:"column", 
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
          },
          [theme.breakpoints.up('md')]: {
            width: "70%"
          },
          [theme.breakpoints.up('lg')]: {
           width:"50%"
          },
    },
    container:{
        display:"flex", 
        justifyContent:"center"
    }
})) 

export const ShiftsPage = () => {
    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const professions = ['Test', 'Test2', 'Test3', 'Test4']
    const hourAvailable = ['myTest', 'myTest2', 'myTest3', 'myTest4']
    const [selectedDate, setSelectedDate] = useState(null);
    const dispatch = useDispatch()

    const classes = useStyles()
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} libInstance={moment}>
       <PageBar title={"Shifts Page"} />
       <Container style={{display:"flex", justifyContent:"center"}}>
        
            <Paper component={"form"} className={classes.form}>
                <TextField label="Dni" value={dni} type="number" className={classes.field} style={{  marginTop:'3%' }} onChange={e=>(setDni(e.target.value))} />
                <TextField label="Name" value={name} className={classes.field} style={{  marginTop:'3%' }} onChange={e=>(setName(e.target.value))} />
                <Autocomplete id="select-profession" disabled={true} options={professions} className={classes.field} getOptionLabel={(option) => option} style={{marginTop:'3%' }} renderInput={(params) => <TextField {...params} label="Profession"  />}/>
                <DatePicker disablePast emptyLabel="Date" value={selectedDate} disabled={true} onChange={myMoment => setSelectedDate(moment(myMoment).format('L'))} format={'dd/mm/yyyy'} className={classes.field} style={{  marginTop:'6%'}}/>
                <Autocomplete id="select-hour" options={hourAvailable} className={classes.field} getOptionLabel={(option) => option} style={{marginTop:'3%' }} renderInput={(params) => <TextField {...params} label="Hour"  />}/>
                <Button color="secondary" variant="contained" className={classes.field} style={{marginTop:'8%',marginBottom:'3%'}}>
                Take Shift
                </Button>
        </Paper>
        </Container>
        </MuiPickersUtilsProvider>
    )
}
