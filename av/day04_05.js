var arr = [1, 3, 7, 2, 67, 9, 20, 10, 3];

//console.table(arr);

// condition 
//>10

var newArr2 = [];
for (var i = 0; i < arr.length; i++) {

    newArr2.push({
        prev: arr[i],
        newValue: arr[i] * 2,
        cuurentIndex: i
    })
}

var arrnew= arr.map((a,index) => {
    return {
        prev: a,
        newValue: a * 2,
        cuurentIndex: index
    }
})

console.table(arrnew);
console.table(newArr2);