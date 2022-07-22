const person= {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    22:"222",
    eyeColor:"blue",
    findAdult : function() {
        if( this.age >= 18){
            console.log ( this.firstName + " Can vote" )
        }
    }
};
console.log(person['age'])

















// var emp = new Object();
// emp.id = 1;
// emp.name = "Komal";
// emp.sal = 100000;


// function emp (id,name,sal){
//         this.id=id;
//         this.name=name;
//         this.sal=sal;
//     }
// e = new emp (10,"Yogesh",20);





// console.log(emp.id +" Name: " + emp.name + " Salaray: " + emp.sal);
// console.log(e.id +" Name: " + e.name + " Salaray: " + e.sal);