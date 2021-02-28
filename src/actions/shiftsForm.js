import { types } from "../types/types";

export const changeDate = (date) =>({
    type: types.shiftsFormDate,
    payload: {
        formDate: date
    }
})
export const changeProfession = (profession) =>({
    type: types.shiftsFormProfession,
    payload: {
        shiftsFormProfession: profession
    }
})
export const changeProfessional = (professional) =>({
    type: types.shiftsFormProfessional,
    payload: {
        shiftsFormProfessional: professional
    }
})