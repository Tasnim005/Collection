function countSheeps(sheep) {
  const filteredArr = sheep.filter((item) => {
    return item === true
  })

  return filteredArr.length
}

const arr = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]


console.log(countSheeps(arr))
