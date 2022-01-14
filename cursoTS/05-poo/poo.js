"use strict";
class Data {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const niver = new Data(20, 9, 1988);
console.log(niver.month);
class DataSimples {
    constructor(day = 1, month = 1, year = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const niver2 = new DataSimples(20, 2, 1996);
console.log(niver2.month);
const niver3 = new DataSimples();
console.log(niver3.month);
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    presentation() {
        return `Product: ${this.name} costs US$${this.priceWithDiscount().toFixed(2)} (${this.discount * 100}% off)`;
    }
    priceWithDiscount() {
        return this.price - this.discount * this.price;
    }
}
const p1 = new Product('pencil', 4.2, 0.06);
const p2 = new Product('eraser', 1, 0.2);
console.log(p1.presentation());
console.log(p2.presentation());
class Car {
    constructor(factory, model, maxSpeed = 200) {
        this.factory = factory;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.speed = 0;
    }
    speedModifier(delta) {
        const newSpeed = this.speed + delta;
        const isValid = newSpeed >= 0 && newSpeed <= this.maxSpeed;
        if (isValid)
            this.speed = newSpeed;
        else
            this.speed = delta > 0 ? this.maxSpeed : 0;
        return this.speed;
    }
    speedUp() {
        return this.speedModifier(5);
    }
    speedDown() {
        return this.speedModifier(-5);
    }
}
const march = new Car('Nissan', 'March', 195);
while (march.speed < march.maxSpeed)
    console.log(march.speedUp());
while (march.speed > 0)
    console.log(march.speedDown());
// Array(5).fill(0).forEach(() => console.log(march.speedUp()))
// Array(4).fill(0).forEach(() => console.log(march.speedDown()))
class Ferrari extends Car {
    constructor(model, maxSpeed) {
        super('Ferrari', model, maxSpeed);
    }
    speedUp() {
        return this.speedModifier(25);
    }
    speedDown() {
        return this.speedModifier(-25);
    }
}
const f40 = new Ferrari('F40', 360);
console.log(f40);
while (f40.speed < f40.maxSpeed)
    console.log(f40.speedUp());
while (f40.speed > 0)
    console.log(f40.speedDown());
// GETER and SETTER
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0 && value <= 120)
            this._age = value;
    }
}
const person1 = new Person();
person1.age = 10;
console.log(person1);
// STATIC atributes and methods
class Matematica {
    static areaCirc(r) {
        return this.pi * r * r;
    }
}
Matematica.pi = 3.1416;
// const m1 = new Matematica()
// m1.pi = 3.14
// console.log(m1.areaCirc(4))
console.log(Matematica.areaCirc(4));
// Abstract
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    execute(...nums) {
        this.resultado = nums.reduce((t, a) => t + a);
    }
}
class Mult extends Calculo {
    execute(...nums) {
        this.resultado = nums.reduce((t, a) => t * a);
    }
}
let c1 = new Soma;
c1.execute(6, 7, 8, 9);
console.log(c1.getResultado());
c1 = new Mult;
c1.execute(6, 7, 8, 9);
console.log(c1.getResultado());
//# sourceMappingURL=poo.js.map