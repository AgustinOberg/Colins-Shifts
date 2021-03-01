import { Button, makeStyles, Paper, TextField } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { DatePicker } from '@material-ui/pickers'
import React, { useState, useEffect } from 'react'
import moment from "moment";
import { useDispatch } from 'react-redux';
import { changeDate, changeProfession, changeProfessional } from '../../../actions/shiftsForm';
import { resetSuccess, startTakeShiftWithoutUid } from '../../../actions/shifts';
import  { Redirect } from 'react-router-dom'

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


export const ShiftForm = ({professions, hourAvailable, professionals, loading}) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [profession, setProfession] = useState(null);
    const [professional, setProfessional] = useState(null);
    const [hour, setHour] = useState(null)
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeDate(selectedDate))
        dispatch(changeProfession(profession))
        dispatch(changeProfessional(professional))
        
    }, [selectedDate, profession , professional])

    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const classes = useStyles()

    const handleOnSelectProfessional = (_, value) =>{
        setProfessional(value)
    }
    const handleOnSelectProfession = (_, value) =>{
        setProfession(value)
        dispatch(resetSuccess())
    }
    const handleOnSelectHour = (_,value) =>{
        setHour(value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(dni.length>4 && name.length>2 && hour.length>0){
            dispatch(startTakeShiftWithoutUid(dni,name,profession,professional,selectedDate,hour))
           
        }
        else{
            console.log("SHIFT ERROR")
        }
    }

   
    return (
        <Paper component={"form"} className={classes.form} onSubmit={handleSubmit}>
        <TextField label="Dni" value={dni} type="number" className={classes.field} style={{  marginTop:'3%' }} onChange={e=>(setDni(e.target.value))} />
                <TextField label="Name" value={name} className={classes.field} style={{  marginTop:'3%' }} onChange={e=>(setName(e.target.value))} />
                <Autocomplete 
                    id="select-profession"  
                    options={professions} 
                    className={classes.field} 
                    getOptionLabel={(option) => option}   
                    value={profession}
                    onChange={handleOnSelectProfession}  
                    style={{marginTop:'3%' }} 
                    renderInput={(params) => <TextField {...params} label="Profession"  />}/>

                <Autocomplete 
                    id="select-professionals" 
                    disabled={professionals === null}
                    options={professionals} 
                    getOptionLabel={(option) => option} 
                    value={professional}
                    onChange={handleOnSelectProfessional}  
                    className={classes.field} 
                    style={{marginTop:'3%' }} 
                    renderInput={(params) => <TextField {...params} label="Professionals"  />}/>

                <DatePicker disabled={professional === null} disablePast emptyLabel="Date" value={selectedDate} onChange={myMoment => setSelectedDate(moment(myMoment).format('L'))} format={'dd/MM/yyyy'} className={classes.field} style={{  marginTop:'6%'}}/>
                <Autocomplete 
                    id="select-hour" 
                    disabled={selectedDate === null || professional === null } 
                    options={hourAvailable} 
                    onChange={handleOnSelectHour}
                    value={hour} 
                    className={classes.field} 
                    style={{marginTop:'3%' }} 
                    renderInput={(params) => <TextField {...params} label="Hour"  />}/>
                <Button disabled={loading} color="secondary" type="submit" variant="contained" className={classes.field}  style={{marginTop:'8%',marginBottom:'3%', width:'80%', marginRight:'5px'}}>
                Take Shift
                </Button>
                
        </Paper>
    )
}
