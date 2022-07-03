console.log("I am in Index.js");

var name = 'Abhay';
age = 24;

var output = "Hi " + " " + name + ". You are  eligible for vote as you are " + age + " years old.";
console.log(output);

var output2 = `Hi  ${name}. You are  eligible for vote as you are ${age} years old.`
console.log(output);

var students=['Abhay','Yogesh', 'Nivant','Ranjit']
var output3 =
    `
Thanks for Joining react Class: 
${

    students.map((e) => {
        return e + '\n';
    }).join('')
    }


`

var output4 ='4: Thanks for Joining react Class: '

for (var i = 0; i < students.length; i++) {
    output4 = output4 + '\n' + students[i];
}



console.log(output3);
console.log(output4);