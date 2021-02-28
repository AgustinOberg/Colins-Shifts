export const transformProfessionals = (shifts, profession) => {
    const allProfessionals = []
    shifts.data.forEach(eachData => {
        if(eachData.profession === profession){
            allProfessionals.push(eachData.name)
        }
    });
    return( allProfessionals )

}