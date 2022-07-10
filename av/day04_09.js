var arr = [1, 3, 7, 2, 67, 9, 20, 10, 3];

var result = 0;
var t=arr.reduce((p,c) => {
    return p + c;
}, result)

console.log(t);