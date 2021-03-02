import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { completeShift, deleteShift } from '../../../helpers/completeShift'
import {useSelector} from 'react-redux'

export const ManageShift = ({open, setOpen, data}) => {
    const handleOnClose = () =>{
        setOpen(false)
    }
    const shifts = useSelector(state => state.shifts.data)
    const handleOnComplete = () =>{
        setOpen(false)
        completeShift(data, shifts)
    }
    const handleOnDelete = () =>{
        setOpen(false)
        deleteShift(data, shifts)
    }
    

    return (
        <Dialog
        open={open}
        onClose={handleOnClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
          <DialogTitle id="alert-dialog-title">What do you want to do?</DialogTitle>
          <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Client Name : ${data.name}, Professional: ${data.professional}, Date: ${data.day} - ${data.hour}` }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnComplete} color="primary">
            Complete
          </Button>
          <Button onClick={handleOnDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    )
}
