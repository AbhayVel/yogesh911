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
console.log(fact(5));
console.log(factMinus(5));
console.log(factRec(5));