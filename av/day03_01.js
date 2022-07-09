var j = undefined;


var a = 12;
var b = 13;
var c = a + b;
console.log(typeof a);
a = "aa";
console.log(typeof a);
c = a + b;
console.log(c);
console.log(typeof c);

//Ecamscript 6
console.log(m);

var m = 12;//->
{
    

    let k = 12;//->
    console.log(k);
}



callMe();
console.log(j);

j = 23;
function callMe() {
    //var/let/const=> defining scope -> //nearest curly 
    // i = 3;//global scope 
    var j = 12;//hoisting 

    console.log(j);
}

function callMe2() {
    var j = undefined;
    //var/let/const=> defining scope -> //nearest curly 

    j = 12;//hoisting 

    console.log(j);
}

