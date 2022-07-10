var callMe = undefined;

 
 callMe=()=> { //function Expression=> Arrow function -> lambda expression  
    //var/let/const=> defining scope -> //nearest curly 
    // i = 3;//global scope 
    {
        var j = 12;//hoisting 
      //  let k = 24;
    }
    

    console.log(j);
  //  console.log(k);
}

callMe();
 