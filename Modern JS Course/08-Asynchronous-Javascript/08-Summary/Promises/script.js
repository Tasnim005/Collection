// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1

//     if (a === 2) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })

// p
//     .then((message) => {
//         console.log('This is in the then ' + message)
//     })

//     .catch((message) => {
//         console.log('This is in the then ' + message)
//     })



// Promise All
const recordVideoOne = new Promise((resolve, reject)=>{
    resolve('Video 1 recorded')
})    
const recordVideoTwo = new Promise((resolve, reject)=>{
    resolve('Video 2 recorded')
})    
const recordVideoThree = new Promise((resolve, reject)=>{
    resolve('Video 3 recorded')
})    

Promise.all(
    [recordVideoOne, recordVideoTwo, recordVideoThree]
).then((messages)=>{
    console.log(messages)
})

Promise.race(
    [recordVideoOne, recordVideoTwo, recordVideoThree]
).then((message)=>{
    console.log(message)
})