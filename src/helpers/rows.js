import nextId from "react-id-generator";

export const generateRows = (shifts) =>{
    const myReturn = []
    if(shifts.length>0){
        shifts.forEach((element) => {
            element.shifts.forEach((eachShift) => {
                const formatted = {
                    id: nextId(),
                    uid: element.id,
                    dni: eachShift.dni,
                    name: eachShift.name,
                    profession: eachShift.profession,
                    day: eachShift.date,
                    hour: eachShift.hour,
                    professional: eachShift.professional
                }
                if(!myReturn.includes(formatted)){
                    myReturn.push(formatted)
                }
            });
        });
    }
    return myReturn
}