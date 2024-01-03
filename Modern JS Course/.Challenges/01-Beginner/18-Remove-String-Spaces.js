function noSpace(str) {
    const arr = str.split('')

    const filteredArr = arr.filter((item) => {
        if (item !== ' ') {
            return true
        }
    })
    
    const arrWithoutSpace = filteredArr.join('')
    
    return arrWithoutSpace
}

// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))



