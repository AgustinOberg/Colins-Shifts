import { Button, makeStyles, Paper, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { DatePicker } from '@material-ui/pickers'
import React, { useState, useEffect } from 'react'
import moment from "moment";
import { useDispatch } from 'react-redux';
import { changeDate, changeProfession, changeProfessional } from '../../../actions/shiftsForm';

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


export const ShiftForm = ({professions, hourAvailable, professionals}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [profession, setProfession] = useState(null);
    const [professional, setProfessional] = useState(null);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeDate(selectedDate))
        dispatch(changeProfession(profession))
        dispatch(changeProfessional(professional))

    }, [selectedDate, profession , professional])

    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const classes = useStyles()

    const handleOnSelectProfessional = (value) =>{
        setProfessional(value)
    }
    const handleOnSelectProfession = (value) =>{
        setProfession(value)
    }
    return (
        <Paper component={"form"} className={classes.form}>
        <TextField label="Dni" value={dni} type="number" className={classes.field} style={{  marginTop:'3%' }} onChange={e=>(setDni(e.target.value))} />
                <TextField label="Name" value={name} className={classes.field} style={{  marginTop:'3%' }} onChange={e=>(setName(e.target.value))} />
                <Autocomplete onChange={(event, value) => handleOnSelectProfession(value)} id="select-profession"  options={professions} className={classes.field} getOptionLabel={(option) => option} style={{marginTop:'3%' }} renderInput={(params) => <TextField {...params} label="Profession"  />}/>
                <Autocomplete disabled={profession === null} onChange={(event, value) => handleOnSelectProfessional(value)} id="select-professionals" options={professionals} className={classes.field} getOptionLabel={(option) => option} style={{marginTop:'3%' }} renderInput={(params) => <TextField {...params} label="Professionals"  />}/>
                <DatePicker disabled={professional === null} disablePast emptyLabel="Date" value={selectedDate} onChange={myMoment => setSelectedDate(moment(myMoment).format('L'))} format={'dd/MM/yyyy'} className={classes.field} style={{  marginTop:'6%'}}/>
                <Autocomplete id="select-hour" disabled={selectedDate === null || professional === null } options={hourAvailable} className={classes.field} getOptionLabel={(option) => option} style={{marginTop:'3%' }} renderInput={(params) => <TextField {...params} label="Hour"  />}/>
                <div style={{width:"100%", display:"flex", justifyContent:'space-between', alignItems:'center'}}>

                <Button color="secondary" variant="contained" className={classes.field}  style={{marginTop:'8%',marginBottom:'3%', width:'80%', marginRight:'5px'}}>
                Take Shift
                </Button>
                <Button color="primary" variant="contained" className={classes.field}  style={{marginTop:'8%',marginBottom:'3%',  width:'20%'}}>
                Refresh
                </Button>
                </div>
        </Paper>
    )
}
