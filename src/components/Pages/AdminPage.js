import React from 'react'
import { PageBar } from '../../PageBar'
import { DataGrid } from '@material-ui/data-grid';
import { Container, Paper } from '@material-ui/core';

const columns = [
  { field: 'dni', headerName: 'DNI', width: 100 },
  { field: 'name', headerName: 'NAME', width: 270 },
  { field: 'profession', headerName: 'PROFESSION', width: 140 },
  { field: 'day', headerName: 'DAY', width: 120 },
  { field: 'hour', headerName: 'HOUR', width: 100 },
  { field: 'professional', headerName: 'PROFESSIONAL', width: 240 },
];
const rows = [
  { id: 1, dni: '42435321', name: 'Agustin Aguilera', profession: "Nutrición", day: "10/02/2021", hour: "05:31", professional: "Blanco Ruiz" },
  { id: 2, dni: '52435321', name: 'Blanco Ruiz Florencia', profession: "Nutrición", day: "10/02/2021", hour: "05:31", professional: "Blanco Ruiz" },
  { id: 3, dni: '12435321', name: 'Melina', profession: "Nutrición", day: "10/02/2021", hour: "05:31", professional: "Blanco Ruiz" },
  { id: 4, dni: '22435321', name: 'Agustina', profession: "Nutrición", day: "10/02/2021", hour: "05:31", professional: "Blanco Ruiz" },
  { id: 5, dni: '13435321', name: 'Mariela', profession: "Nutrición", day: "10/02/2021", hour: "05:31", professional: "Blanco Ruiz" },
  { id: 6, dni: '55435321', name: 'Nicole', profession: "Nutrición", day: "10/02/2021", hour: "05:31", professional: "Blanco Ruiz" },
];

export const AdminPage = () => {
    
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
