function fact(a) {
    var result = 1;
    for (var i = 1; i <= a; i = i + 1) {
        result = result * i;
    }
    return result;
}

function factMinus(a) {
    var result = 1;
    for (var i = a; i >= 1; i = i - 1) {
        result =i* result ;
    }
    return result;
}


function factRec(a) {
    if (a == 1) {
        return a;
    }
     
    return a * factRec(a-1);
}
var obj = {}
let funTem = fact.bind(obj);
console.log(funTem(5,2,2,2));
console.log(factMinus.apply(obj,[5]));
console.log(factRec.call(obj,5,4,3));