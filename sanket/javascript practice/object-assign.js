let komalSchool = {
    schoolName: "RMG",highestQalification : "10Th" ,  Year:1922
}   
let komalClg = {
    clgName: "Kalmadi",highestQalification: "MCA", cPin:200
}  
let companyDate = Object.assign(komalSchool,komalClg);
console.log(komalSchool.pin)
console.table(companyDate);