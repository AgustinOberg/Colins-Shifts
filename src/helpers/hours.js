export const transformHours = (shifts, initHour, finishHour, date, professional) =>{
    const myDate = convertDate(date)
    const startHour = parseInt(initHour)
    const endHour = parseInt(finishHour)
    const aux = []
    for (let index = startHour; index <= endHour; index++) {
        aux.push(index.toString()+":00")
        if(index!== endHour){
            aux.push(index.toString()+":30")
        }
    }
    const finalReturn = filterHours(setMyHours(shifts.data, myDate, professional), aux)
    return finalReturn
}

const setMyHours = (data, date, professional) =>{
    const aux = []
    data.forEach(element => {
        if(element.name === professional)
        {
            element.shifts.forEach(eachShift => {
                if(eachShift.date !== date){
                aux.push(eachShift.Hour)
            }
        });
        }
    });

    return aux
}

const filterHours = (myHours, genericHours) =>{
    const userHours = myHours
    const websiteHours = genericHours
    userHours.forEach(element => {
        const index = websiteHours.indexOf(element);
        if (index > -1) {
            websiteHours.splice(index, 1);
        }
    });
    return websiteHours
}

export const convertDate = (date) =>{
    const originalDate = date
    if(date !== null){
        const customDate = originalDate.split("/")
        const myReturn = customDate[1]+"/"+customDate[0]+"/"+customDate[2]
        return myReturn
    }
    else{
        return date
    }
}