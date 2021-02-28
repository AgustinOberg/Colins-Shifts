export const types ={
    login: '[AUTH] Login',
    logout: '[AUTH] Logout',
    startLoading: '[AUTH] InitLoading',
    endLoading: '[AUTH] EndLoading',
    regSuccess: '[AUTH] RegisterSuccess',
    regError: '[AUTH] RegisterError',
    regErrorReset: '[AUTH] RegisterErrorReset',
    loginError: '[AUTH] LoginError',

    regInvalidName: '[REGISTER] Name',
    regInvalidDni: '[REGISTER] Dni',
    regInvalidPw: '[REGISTER] Password',
    regInvalidEmail: '[REGISTER] Email',
    regInvalidPhone: '[REGISTER] Phone',
    regInvalidProfession: '[REGISTER] Profession',
    regReset : '[REGISTER] Reset',

    shiftsAddData: '[SHIFTS] AddData',
    shiftsAddSuccess: '[SHIFTS] TakeShiftSuccess',
    shiftsAddError: '[SHIFTS] Error',
    shiftsStartLoading: '[SHIFTS] StartLoading',
    shiftsEndLoading: '[SHIFTS] EndLoading',
    shiftsResetStatus: '[SHIFTS] ResetStatus',
    
    shiftsFormDate : '[SHIFTS FORM] DataPickerChange',
    shiftsFormProfessional : '[SHIFTS FORM] ProfessionalChange',
    shiftsFormProfession : '[SHIFTS FORM] ProfessionChange',
}