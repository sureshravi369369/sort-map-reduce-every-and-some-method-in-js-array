// sort method:

// primitive type:

let number1=[4,7,8,5,9,]
let number2=[5,6,1,2,4,7]

const ascendingOrdar=number1.sort()
console.log(ascendingOrdar);

const descendingOrder=number2.sort((a,b)=>{
     return b-a
})
console.log(descendingOrder);

// reverse:
// const reverse=number1.reverse()
// console.log(reverse);


// object type:

let students=[
    {id:1, name:"Senthil"},
    {id:2, name:"Guru"},
    {id:3, name:"Anbu"}
]

students.sort((a,b)=>{
     if (a.name < b.name) return -1;

     if(a.name > b.name) return 1;

     return 0;
})

console.log(students);