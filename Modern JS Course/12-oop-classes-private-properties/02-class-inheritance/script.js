// Parent class
class Shape{
    constructor(name){
        this.name = name
    }

    logName(){
        console.log(`Shape Name: ${this.name}`)
    }
}

// Rectangle - Sub class
class Rectangle extends Shape {
    constructor(name, width, height){
        super(name) // calls the constructor of the parent class (Shape) and passes the name parameter to it. 

        this.width = width
        this.height = height
    }
}

/*The extends keyword is used to create a subclass (in this case, Rectangle) that inherits from another class (Shape). This establishes a "parent-child" relationship between the Shape class and the Rectangle subclass. */


const rect = new Rectangle('Rect 1', 20, 30)
console.log(rect)
rect.logName()

// rect is an instance of both Rectangle and Shape
console.log(rect instanceof Rectangle)
console.log(rect instanceof Shape)


// Circle - Sub class
class Circle extends Shape{
    constructor(name, radius){
        super(name)

        this.radius = radius
    }

    // We can override the Shape logName() (polymorphism)
    logName(){
        console.log(`Circle Name: ${this.name}`)
    }
}


const circle1 = new Circle('Circle 1', '25')
console.log(circle1)
circle1.logName()