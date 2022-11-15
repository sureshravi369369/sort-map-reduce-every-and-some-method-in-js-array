// primitive type:

const number=[1,2,3,4,5]

let multiple=number.map((value)=>{
    return value*2
})

console.log(multiple);

// refrence type:

const  people=[
    {id:1, fristName:"ajith", lastName:"kumar"},
    {id:2, fristName:"anbu", lastName:"selvan"},
    {id:3, fristName:"nantha", lastName:"gopal"},
]

let final=people.map((value)=>{

 let fullName=[value.fristName,value.lastName].join(" ");
 let obj={id:value.id, Name:fullName}
   
 return obj;
})


console.log(final);