class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get getRadius() {
        return this.radius;
    }

    set setRadius(radius) {
        this.radius = radius;
    }

    get getDiameter() {
        return this.radius * 2;
    }

    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

let myCircle = new Circle(5);

console.log("Radius of the circle:", myCircle.getRadius);
myCircle.setRadius = 10;
console.log("New radius of the circle:", myCircle.getRadius);
console.log("Diameter of the circle:", myCircle.getDiameter);
console.log("Area of the circle:", myCircle.calculateArea());
console.log("Circumference of the circle:", myCircle.calculateCircumference());
