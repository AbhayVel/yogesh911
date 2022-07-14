const ages = [3, 10, 18, 20];
console.log(ages.find(checkAge));
function checkAge(age){
return age >= 18;
}