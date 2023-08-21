// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Getter methods
  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  get area() {
    return Math.PI * (this.radius ** 2);
  }

  // Setter methods
  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  set circumference(newCircumference) {
    this.radius = newCircumference / (2 * Math.PI);
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI);
  }
}
const myCircle = new Circle(5);

console.log(myCircle.radius); // Output: 5
console.log(myCircle.diameter); // Output: 10
console.log(myCircle.circumference); // Output: 31.41592653589793
console.log(myCircle.area); // Output: 78.53981633974483

myCircle.diameter = 20;
console.log(myCircle.radius); // Output: 10
console.log(myCircle.circumference); // Output: 31.41592653589793

myCircle.circumference = 50;
console.log(myCircle.radius); // Output: 7.957747154594767

myCircle.area = 150;
console.log(myCircle.radius); // Output: 6.122934917841499
