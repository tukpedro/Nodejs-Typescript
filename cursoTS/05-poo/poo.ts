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
  private speed: number = 0;

  constructor(
    public factory: string,
    public model: string,
    private maxSpeed: number = 200,
  ) {}

  private speedModifier(delta: number): number {
    const newSpeed = this.speed + delta;
    const isValid = newSpeed >= 0 && newSpeed <= this.maxSpeed;

    if (isValid) this.speed = newSpeed;
    else this.speed = delta > 0 ? this.maxSpeed : 0;

    return this.speed;
  }

  public speedUp(): number {
    return this.speedModifier(50);
  }

  public speedDown(): number {
    return this.speedModifier(-50);
  }
}

const march = new Car('Nissan', 'March', 195);
Array(5).fill(0).forEach(() => console.log(march.speedUp()))
Array(4).fill(0).forEach(() => console.log(march.speedDown()))
