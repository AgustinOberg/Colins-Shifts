export const transformProfession = (shifts) =>{
    const allProfessions = []
    shifts.data.forEach(eachData => {
        if(!allProfessions.includes(eachData.profession)){
            allProfessions.push(eachData.profession)
        }
    });
    return( allProfessions )
}