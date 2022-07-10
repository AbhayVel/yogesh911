var arr = [1, 3, 7, 2, 67, 9, 20, 10, 3];

//console.table(arr);

// condition 
//>10

var newarr=arr.filter((a) => {
    return a > 10;
})


console.log("Filter Data > 10");
console.table(newarr);

var newarr = arr.filter((a) => {
    return a < 10;
})
console.log("Filter Data < 10");
console.table(newarr);


var newarr = arr.filter((a) => {
    return a ==3 || a >50;
})
console.log("Filter Data a ==3 || a >50");
console.table(newarr);

var newarr = arr.filter((a) => {
    return a == 3 && a > 50;
})
console.log("Filter Data a ==3 && a >50");
console.table(newarr);