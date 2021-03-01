import React, { useEffect, useState } from 'react'
import { PageBar } from '../../PageBar'
import {useDispatch, useSelector} from 'react-redux'
import Container from '@material-ui/core/Container'
import moment from "moment";
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { startAddData } from '../../actions/shifts';
import { ShiftForm } from '../Pages_Fragments/ShiftsPage/ShiftForm';
import { transformProfession } from '../../helpers/professions';
import { transformProfessionals } from '../../helpers/professionals';
import { transformHours } from '../../helpers/hours';
import { Alert } from '@material-ui/lab';


export const ShiftsPage = () => {
    const loading = useSelector(state => state.shifts.loading)
    const shifts = useSelector(state => state.shifts)
    const date = useSelector(state => state.shiftsForm.formDate)
    const status = useSelector(state => state.shifts.status)
    const profession = useSelector(state => state.shiftsForm.formProfession)
    const professional = useSelector(state => state.shiftsForm.formProfessional)
    useEffect(() => {
        transformShiftData()
        transformHourAvailable()
    }, [loading, shifts, profession, professional, date])

    const [professions, setProfessions] = useState([])
    const [professionals, setProfessionals] = useState([])
    const [hourAvailable, setHourAvailable] = useState([])
    const actualHour = new Date()
    const transformShiftData = () =>{
        if(!loading){
            setProfessionals(transformProfessionals(shifts, profession))
            setProfessions(transformProfession(shifts))
        }
    }
    
    const transformHourAvailable = () =>{
        if(!loading){
            setHourAvailable(transformHours(shifts, "08" , "20", date, professional))   //String because i need use the strict mode
        }
    }

    return (
        <>
            <MuiPickersUtilsProvider utils={DateFnsUtils} libInstance={moment}>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>

                <PageBar title={"Shifts Page"} />
                {status === 'SUCCESS' && 
                        <Alert >Shift was added successfully! - {actualHour.getHours() + ":" + actualHour.getMinutes() + ":" + actualHour.getSeconds()}</Alert>
                }
                </div>
                <Container style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                    <ShiftForm professions={professions} hourAvailable={hourAvailable} professionals={professionals} loading={loading}/>
                </Container>
            </MuiPickersUtilsProvider>
        </>
    )
}
