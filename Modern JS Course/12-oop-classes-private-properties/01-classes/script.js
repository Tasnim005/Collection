class Rectangle{
    constructor(name, width, height){
        this.name = name
        this.width = width
        this.height = height
    }

    area(){
        return this.width * this.height
    }

    perimeter(){
        return 2*(this.width + this.height)
    }

    isSquare(){
        return this.width===this.height
    }

    displayArea(){
        return `Rectangle Area: ${this.area()}`
    }
}

const rectangle1 = new Rectangle('Rect 1', '20', '10')

console.log(rectangle1)
console.log(rectangle1.area())
console.log(rectangle1.perimeter())
console.log(rectangle1.isSquare())
console.log(rectangle1.displayArea())