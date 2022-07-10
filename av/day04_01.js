var arr = [1, 3, 7, 2, 67, 9, 20, 10, 3];

//console.table(arr);

arr.sort((a, b) => {//decending order 
    return a > b ? -1 : 1;
})
console.log("Values in decending order")
console.table(arr);


arr.sort((a, b) => {//ascending order 
    return a > b ? 1 : -1;
})
console.log("Values in ascending order")
console.table(arr);