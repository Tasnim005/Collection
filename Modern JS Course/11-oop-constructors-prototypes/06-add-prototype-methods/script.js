function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function(){
  return this.width * this.height
}

Rectangle.prototype.perimeter = function(){
  return 2* (this.width + this.height)
}

Rectangle.prototype.isSquare = function(){
  return this.width === this.height
}

Rectangle.prototype.changeName = function (newName) {
  return (this.name = newName);
};

const rect1 = new Rectangle('Rect 1', 10, 10);
const rect2 = new Rectangle('Rect 2', 30, 40);

console.log(rect1)
console.log(rect1.area());
console.log(rect1.perimeter());
console.log(rect1.isSquare());

rect1.changeName('Test')
console.log(rect1.name)

console.log(rect2.area())