import React from 'react'
import { PageBar } from '../../PageBar'
import { DataGrid } from '@material-ui/data-grid';
import { Container, Paper } from '@material-ui/core';
import {useSelector} from 'react-redux'
import { generateRows } from '../../helpers/rows';
const columns = [
  { field: 'dni', headerName: 'DNI', width: 100 },
  { field: 'name', headerName: 'NAME', width: 270 },
  { field: 'profession', headerName: 'PROFESSION', width: 140 },
  { field: 'day', headerName: 'DAY', width: 120 },
  { field: 'hour', headerName: 'HOUR', width: 100 },
  { field: 'professional', headerName: 'PROFESSIONAL', width: 240 },
];


export const AdminPage = () => {
    const shifts = useSelector(state => state.shifts.data)
    const rows = generateRows(shifts)
    return (
        <>
            <PageBar title={"Manage Shifts"} buttonRequired={true}/>
            <Container>

              <Paper elevation={3}>
            <div style={{ height: "80vh", width: '100%' }}>

                <DataGrid rows={rows} columns={columns} hideFooterSelectedRowCount={true} onCellClick={(e)=>console.log(e.row)} />
            </div>
              </Paper>
            </Container>
        </>
    )
}
