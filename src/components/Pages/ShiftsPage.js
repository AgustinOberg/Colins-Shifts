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


export const ShiftsPage = () => {
    
    const loading = useSelector(state => state.shifts.loading)
    const shifts = useSelector(state => state.shifts)
    const date = useSelector(state => state.shiftsForm.formDate)
    const profession = useSelector(state => state.shiftsForm.formProfession)
    const professional = useSelector(state => state.shiftsForm.formProfessional)
    useEffect(() => {
        transformShiftData()
        transformHourAvailable()
    }, [loading, shifts, profession, professional, date])

    const [professions, setProfessions] = useState([])
    const [professionals, setProfessionals] = useState([])
    const [hourAvailable, setHourAvailable] = useState([])

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
                <PageBar title={"Shifts Page"} />
                <Container style={{display:"flex", justifyContent:"center"}}>
                    <ShiftForm professions={professions} hourAvailable={hourAvailable} professionals={professionals} loading={loading}/>
                </Container>
            </MuiPickersUtilsProvider>
        </>
    )
}
