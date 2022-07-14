let person1 = {
    fName: "Suraj",lName: "Kumar"
}   
let person2 = {
    fName: "Suraj",lName: "Kumar"
}       
console.log(person1===person2)
// return "false" coz its stored in different memory location, Both object are stored in diff location,
console.log(person1.fName===person2.fName);
// return true, Its compare values only
console.log(Object.is(person1,person2));
// return false ,  Its a javascript object method and its checking equality 

