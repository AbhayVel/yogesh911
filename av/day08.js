const student = [
    {
        id: 1,
        name: 'Komal',
        aDate: '01-01-2022',
        status: "p",
        teachersNote: "sick",
        participation: 100,     
        flagCase : "ci"
    },
    {
        id: 2,
        name: 'Nivant',
        aDate: '01-02-2022',
        status: "p",
        teachersNote: "sick",
        participation: 100,
        flagCase : "ci"
    },
    {
        id: 3,
        name: 'Rajit',
        aDate: '01-02-2022',
        status: "p",
        teachersNote: "AAA",
        participation: 100,
        flagCase : "cn"
    },
    {
        id: 4,
        name: 'sanket',
        aDate: '01-02-2022',
        status: "p",
        teachersNote: "sick",
        participation: 100,
        flagCase : "cn"
    },
    {
        id: 5,
        name: 'Yogesh',
        aDate: '02-02-2022',
        status: "p",
        teachersNote: "sick",
        participation: 100,
        flagCase : "cn"
    },
    {
        id: 6,
        name: 'Akash',
        aDate: '06-02-2022',
        status: "a",
        teachersNote: "ZZZ",
        participation: 10,
    },
    {
        id: 8,
        name: 'Zara',
        aDate: '06-02-2022',
        status: "a",
        teachersNote: "all ok",
        participation: 70
    },
    {
        id: 9,
        name: 'Ashish',
        aDate: '06-02-2022',
        status: "a",
        teachersNote: "all ok",
        participation: 70
    },
]

const columnName = "name" ;
const columnType = "String";
const value = ""

const FilterStudent = student.filter((a) => {
    if(columnType == "String"){
        console.log("In String")
        return a[columnName].indexOf(value) > -1;
    }
    else if(columnType == "number"){
        return a[columnName]==value
    }

})    
console.table(FilterStudent)
