const ages = [10,22,41,21,18,9,11];

console.table(ages.filter(checkAdult));

function checkAdult(age){
    return age > 18;
}

