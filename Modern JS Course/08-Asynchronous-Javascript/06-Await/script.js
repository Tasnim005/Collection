let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true

let toppingsChoice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                console.log("Which toppings would you like?")
            )
        }, 3000)
    })
}

async function kitchen() {
    console.log("A")
    console.log("B")
    console.log("C")

    await toppingsChoice()

    console.log("D")
    console.log("E")
}

kitchen()

console.log("Doing the dishes")
console.log("Cleaning the tables")
console.log("Taking other orders")