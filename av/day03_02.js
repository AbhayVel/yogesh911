var callMe = undefined;
callMe();
 
 callMe=function () { //function Expression 
    //var/let/const=> defining scope -> //nearest curly 
    // i = 3;//global scope 
    {
        var j = 12;//hoisting 
        let k = 24;
    }
    

    console.log(j);
    console.log(k);
}

 