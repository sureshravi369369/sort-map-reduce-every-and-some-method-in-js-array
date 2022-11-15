const numbers=[1,2,3,4,5,6,7]

// primitive type:

// every_method:

let isEven=numbers.every((value)=>{

    return value %2==0;
})

console.log(isEven);

// some method:

let isOdd=numbers.some((value)=>{

    return value %2==1;
})

console.log(isOdd);


// refernce type:

const items=[
    {id:1, name:"mobiles", isDeliverable:true},
    {id:2, name:"accessories", isDeliverable:true},
    {id:3, name:"tv", isDeliverable:true}
]

let allDeliverable=items.every((value)=>{
     return value.isDeliverable=true;
})

console.log(allDeliverable);