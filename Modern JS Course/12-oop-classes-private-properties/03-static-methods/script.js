class Rectangle{
    constructor(name, width, height){
        this.name = name
        this.width = width
        this.height = height
    }

    area(){
        return this.width * this.height
    }

    static getClass(){
        console.log( 'Static method called')
        console.log('Rectangle')
        // Static methods cannot access instance-specific data
        // console.log(this.width * this.height) //Hence, the error
    }
}

const rectangle1 = new Rectangle('Rect 1', '20', '10')

console.log(rectangle1)
console.log(rectangle1.area())

// rectangle1.getClass() //Error
Rectangle.getClass()