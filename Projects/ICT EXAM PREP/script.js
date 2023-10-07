function LCM(num1, num2){
    if((num1%num2)===0){
        return `LCM is ${num1}`
    }else if(num1>num2){
        for(let n=1; n<num1; n++){
            return num1%n
        }
    }
}

console.log(LCM(57, 5))

function multiplication (num1= 10, num2=7){
    return num1*num2
}
console.log(multiplication(13, 17))