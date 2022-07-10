var callMe = undefined;

 
callMe = () => //fun is consider as call back function
{
    //var/let/const=> defining scope -> //nearest curly 
    // i = 3;//global scope 
    {
        var j = 12;//hoisting 
      //  let k = 24;
    }
    

    return () => {
        console.log("I am in currying function")
    }
  //  console.log(k);
}

var func = callMe();

func();
callMe()();