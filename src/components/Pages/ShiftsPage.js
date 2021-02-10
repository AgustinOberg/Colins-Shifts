import React, { useState } from 'react'
import { PageBar } from '../../PageBar'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import { InputLabel, MenuItem, Select } from '@material-ui/core';

export const ShiftsPage = () => {
    const [dni, setDni] = useState("")
    const [profession, setProfession] = useState("Test1")
    const professions = ['Test', 'Test2', 'Test3', 'Test4']

    return (
        <>
       <PageBar title={"Shifts Page"} />
       <Container>
        
            <Paper component={"form"} style={{padding:"20px"}}>
                <TextField label="Dni" value={dni} onChange={e=>(setDni(e.target.value))} />
               
       
            </Paper>
        </Container>
        </>
    )
}
