import React, { useState } from 'react'
import {Typography, TextField, Button, makeStyles, Link } from '@material-ui/core'
import {useDispatch} from 'react-redux'
import { startLoginWithEmailPassword } from '../../../actions/auth'
import { Alert } from '@material-ui/lab'
import {useSelector} from 'react-redux'

const useStyles = makeStyles({
    formItem:{
        marginTop:"25vh",
        display:"flex",
        width:"60%",
        flexDirection:"column",
        padding:"3%"
      },
      subtitle: {
        fontSize: 12,
        marginTop: "5%"
      },
})

export const LoginForm = () => {

    const classes = useStyles()
    const error = useSelector( state => state.auth.error )
    const loading = useSelector( state => state.auth.loading )
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleOnChangeEmail= (user) =>{
        setEmail(user)
    }
    const handleOnChangePassword= (user) =>{
        setPassword(user)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(startLoginWithEmailPassword(email, password))
    }

    return (
        <form className={classes.formItem} onSubmit={handleSubmit}>
            <Typography variant="h6" color="initial" style={{marginBottom:"2vh"}} align="center">
            Login Page
            </Typography>
            <TextField id="username" autoComplete="off" label="Email" value={email} onChange={(e)=> handleOnChangeEmail(e.target.value)} />
            <TextField id="password" autoComplete="off" type="password" value={password} label="Password"  onChange={(e)=> handleOnChangePassword(e.target.value)} style={{marginTop:"5vh", marginBottom:"5vh"}} />
            <Button variant="contained" disabled={loading} color="primary" type="submit" >
            Login
            </Button>
            <Typography className={classes.subtitle} color="textSecondary" gutterBottom>
            Website created 100% by <Link href="https://www.linkedin.com/in/aguilera-agustin/"  color="secondary">Agustín Aguilera</Link>
            </Typography>
            {error && <Alert style={{marginTop:"15%"}} severity="error">{error}</Alert>}
      </form>
    )
}
