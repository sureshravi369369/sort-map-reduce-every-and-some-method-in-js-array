
const donation=[65,70,100,150,200,500]

    let totalDonation=donation.reduce((previousValue,currentValue)=>{
             return previousValue+currentValue
       })

    console.log(totalDonation);

const shoppingCart=[
    {id:1, items:"organic milk", cost:45},
    {id:2, items:"bread", cost:20},
    {id:3, items:"maagi", cost:15}
]

    let totalCost=shoppingCart.reduce((accumulator,currentValue)=>{
        
        return accumulator+currentValue.cost
    },0)

    console.lolg(totalCost);