class Data {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
}

const niver = new Data(20, 9, 1988);
console.log(niver.month);

class DataSimples {
  constructor(
    public day: number = 1,
    public month: number = 1,
    public year: number = 1970,
  ) {}
}

const niver2 = new DataSimples(20, 2, 1996);
console.log(niver2.month);

const niver3 = new DataSimples();
console.log(niver3.month);

class Product {
  constructor(
    public name: string,
    public price: number,
    public discount: number = 0,
  ) {}

  public presentation(): string {
    return `Product: ${this.name} costs US$${this.priceWithDiscount().toFixed(
      2,
    )} (${this.discount * 100}% off)`;
  }

  public priceWithDiscount(): number {
    return this.price - this.discount * this.price;
  }
}

const p1 = new Product('pencil', 4.2, 0.06);
const p2 = new Product('eraser', 1, 0.2);

console.log(p1.presentation());
console.log(p2.presentation());

class Car {
  public speed: number = 0;

  constructor(
    public factory: string,
    public model: string,
    public maxSpeed: number = 200,
  ) {}

  protected speedModifier(delta: number): number {
    const newSpeed = this.speed + delta;
    const isValid = newSpeed >= 0 && newSpeed <= this.maxSpeed;

    if (isValid) this.speed = newSpeed;
    else this.speed = delta > 0 ? this.maxSpeed : 0;

    return this.speed;
  }

  public speedUp(): number {
    return this.speedModifier(5);
  }

  public speedDown(): number {
    return this.speedModifier(-5);
  }
}

const march = new Car('Nissan', 'March', 195);
while (march.speed < march.maxSpeed) console.log(march.speedUp());
while (march.speed > 0) console.log(march.speedDown());
// Array(5).fill(0).forEach(() => console.log(march.speedUp()))
// Array(4).fill(0).forEach(() => console.log(march.speedDown()))

class Ferrari extends Car {
  constructor(model: string, maxSpeed: number) {
    super('Ferrari', model, maxSpeed);
  }

  public speedUp(): number {
    return this.speedModifier(25);
  }

  public speedDown(): number {
    return this.speedModifier(-25);
  }
}
const f40 = new Ferrari('F40', 360);
console.log(f40);
while (f40.speed < f40.maxSpeed) console.log(f40.speedUp());
while (f40.speed > 0) console.log(f40.speedDown());

// GETER and SETTER
class Person {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value >= 0 && value <= 120) this._age = value;
  }
}

const person1 = new Person();
person1.age = 10;
console.log(person1);

// STATIC atributes and methods

class Matematica {
  static pi: number = 3.1416;

  static areaCirc(r: number): number {
    return this.pi * r * r;
  }
}

// const m1 = new Matematica()
// m1.pi = 3.14
// console.log(m1.areaCirc(4))

console.log(Matematica.areaCirc(4));

// Abstract

abstract class Calculo {
  protected resultado: number = 0;

  abstract execute(...nums: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  execute(...nums: number[]): void { 
    this.resultado = nums.reduce((t, a) => t + a)
  }
}

class Mult extends Calculo {
  execute(...nums: number[]): void { 
    this.resultado = nums.reduce((t, a) => t * a)
  }
}

let c1 = new Soma
c1.execute(6, 7, 8, 9)
console.log(c1.getResultado())

c1 = new Mult
c1.execute(6, 7, 8, 9)
console.log(c1.getResultado())