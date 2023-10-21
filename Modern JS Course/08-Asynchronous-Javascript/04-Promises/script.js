let stocks = {
    fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (fruitName, call_production) => {
    // console.log("order placed, please call production");

    setTimeout(() => {
        console.log(`${stocks.fruits[fruitName]} was selected`);

        call_production()

    }, 2000)

}

let production = () => {
    // console.log("order received, starting production");

    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log("the fruit has been chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log("The machine was started");

                    setTimeout(() => {
                        console.log(`Ice cream was placed on a ${stocks.holder[0]}`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was added as toppings`);

                            setTimeout(() => {
                                console.log("Serve ice cream");

                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0)
}

order(0, production)