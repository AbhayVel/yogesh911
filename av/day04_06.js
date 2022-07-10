var empArr = [
    {
        id: 1,
        name: "ranjt",
        subject: 1
    },
    {
        id: 2,
        name: "Yogesh",
        subject: 2
    },
    {
        id: 3,
        name: "Komal",
        subject: 3
    },
    {
        id: 4,
        name: "Nivant",
        subject: 4
    },
    {
        id: 5,
        name: "Sanket",
        subject: 3
    },
    {
        id: 6,
        name: "KK",
        subject: 3
    },


];

var subject = [
    {
        id: 1,
        Name: "Javascript"
    },
    {
        id: 2,
        Name: "MVC.net"
    },
    {
        id: 3,
        Name: "React"
    },
    {
        id: 4,
        Name: "Selenium"
    },
    {
        id: 5,
        Name: "Cypruss"
    },
    {
        id: 6,
        Name: "Java"
    }


]

//console.table(arr);

// condition 
//>10

 

 

console.table(empArr);


 
function getSubjectName(id){
  var index=  subject.findIndex((s) => {
        return s.id == id;
  })

    if (index > -1) {
        return subject[index].Name;
    }


    return "Not set";

}


function getSubjectName2(id) {
    var subjectObect = subject.find((s) => {
        return s.id == id;
    })

    if (subjectObect !=undefined) {
        return subject[index].Name;
    }


    return "Not set";

}

var newArray = empArr.map((e) => {
    return {
        id: e.id,
        name: e.name,
        subject: e.subject,
        subjectName: getSubjectName(e.subject)

    }
})

console.table(newArray);
