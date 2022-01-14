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
        return this.speedModifier(50);
    }
    speedDown() {
        return this.speedModifier(-50);
    }
}
const march = new Car('Nissan', 'March', 195);
Array(5).fill(0).forEach(() => console.log(march.speedUp()));
Array(4).fill(0).forEach(() => console.log(march.speedDown()));
//# sourceMappingURL=poo.js.map