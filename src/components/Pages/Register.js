import { Button, Container, makeStyles, Paper, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { PageBar } from '../../PageBar'
import validator from 'validator' 
import {useDispatch} from 'react-redux'
import { dniError, emailError, nameError, phoneError, passwordError, professionError, resetErrors } from '../../actions/registerErrors'
import {useSelector} from 'react-redux'
import { registerWithEmailPasswordNameNum } from '../../actions/auth'
import { Alert } from '@material-ui/lab'
import {registerErrorsReset} from '../../actions/auth'

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
    },
    submitButtons:{
        marginTop:'8%', 
        marginBottom:'3%', 
        display:'flex', 
        [theme.breakpoints.down('xs')]: {
            justifyContent:'center',
          },
        [theme.breakpoints.down('sm')]: {
            justifyContent:'center',
            
          },
          [theme.breakpoints.up('md')]: {
            justifyContent:'space-between'
            
          },
          [theme.breakpoints.up('lg')]: {
            justifyContent:'space-between'
          },
        flexWrap:'wrap', 
        width:'100%'
    }
})) 



export const Register = () => {
    useEffect(() => {
        dispatch(resetErrors())
        dispatch(registerErrorsReset())
    }, [])
   
    const errors = useSelector( state => state.registerErrors )
    const registerError = useSelector( state => state.auth.error )
    const dispatch = useDispatch()
    const classes = useStyles()
    const [dni, setDni] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [profession, setProfession] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegister= (e) =>{
        e.preventDefault()
        dispatch(registerErrorsReset())
        if(isFormValid()){
            dispatch(registerWithEmailPasswordNameNum(email,password,name, phone))
            resetValues()
        }
        
    }

    const resetValues = () =>{
            setDni("")
            setPhone("")
            setName("")
            setProfession("")
            setEmail("")
            setPassword("")
    }

    const isFormValid = () =>{
        dispatch(resetErrors())
        if(dni.trim().length === 0){
            dispatch(dniError('Invalid DNI'))
            return false
        } else if(name.trim().length === 0){
            dispatch(nameError('Invalid Name'))
            return false
        } else if(!validator.isMobilePhone(phone)){
            dispatch(phoneError('Invalid Phone'))
            return false
        } else if(profession.trim().length === 0){
            dispatch(professionError('Invalid Profession'))
            return false
        } else if(!validator.isEmail(email)){
            dispatch(emailError('Invalid Email'))
            return false
        }
         else if(password.trim().length <= 5){
            dispatch(passwordError('Invalid Password'))
            return false
        }
        else{
            return true
        }
    }
    return (
        <>
             <PageBar title={"Register"} buttonRequired={true} />
             <Container style={{display:"flex", justifyContent:"center"}}>
                <Paper component={"form"} className={classes.form} variant="outlined" elevation={0} onSubmit={handleRegister}>
                    {(registerError!==null && registerError!=='SUCCESS') && <Alert severity="error">{registerError}</Alert>}
                    {registerError==='SUCCESS' && <Alert severity="success">SUCCESS!</Alert>}
                    <TextField label="Dni" value={dni}  helperText={errors.dni} error={errors.dni !== null} type="number" className={classes.field} style={{  marginTop:'3%' }} onChange={e=>(setDni(e.target.value))} />
                    <TextField label="Name" value={name} helperText={errors.name} error={errors.name !== null} className={classes.field} style={{  marginTop:'3%' }} onChange={e=>(setName(e.target.value))} />
                    <TextField label="Phone" value={phone} helperText={errors.phone} error={errors.phone !== null} className={classes.field} style={{  marginTop:'3%' }} onChange={e=>(setPhone(e.target.value))} />
                    <TextField label="Profession" value={profession} helperText={errors.profession} error={errors.profession !== null} className={classes.field} style={{  marginTop:'3%' }} onChange={e=>(setProfession(e.target.value))} />
                    <TextField label="Email" value={email} helperText={errors.email} error={errors.email !== null} className={classes.field} style={{  marginTop:'3%' }} onChange={e=>(setEmail(e.target.value))} />
                    <TextField label="Password" value={password} type="password" helperText={errors.password} error={errors.password !== null} className={classes.field} style={{  marginTop:'3%' }} onChange={e=>(setPassword(e.target.value))} />
                   
                    <div className={classes.submitButtons}>

                    <Button color="secondary" variant="contained" type="submit"  style={{marginRight:"5px", marginTop:"5px"}}>
                    New Staff
                    </Button>
                    <Button color="secondary" variant="contained"  style={{marginTop:"5px"}}>
                    Modify Staff
                    </Button>
                    </div>

                    
                </Paper>
             </Container>
        </>
    )
}
