var arr = [1, 3, 7, 2, 67, 9, 20, 10, 3];

//console.table(arr);

// condition 
//>10

var index=arr.findIndex((a) => {
    return a > 10;
})


console.table(index);