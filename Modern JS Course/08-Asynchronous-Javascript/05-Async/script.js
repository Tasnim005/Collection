let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true

// let order = () => {

//     return new Promise((resolve, reject)=>{
//         if(true){
//             resolve()
//         }else{
//             reject()
//         }
//     })
// }

// order()
//     .then()
//     .then()
//     .then()
//     .catch()
//     .finally()


async function order(){
    try{
        await abc
    }

    catch(error){
     console.log("abc doesn't exist", error)
        
    }

    finally{
        console.log("Run code anyways")}
}

order()
    .then(()=>{
        console.log("hello world")
    })