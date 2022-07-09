var callMe = undefined;

 
callMe = (fun) => //fun is consider as call back function
{
    //var/let/const=> defining scope -> //nearest curly 
    // i = 3;//global scope 
    {
        var j = 12;//hoisting 
      //  let k = 24;
    }
    

     fun();
  //  console.log(k);
}

callMe(() => {
    console.log("I am in call back");
});
 