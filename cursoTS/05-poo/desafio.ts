// Exercício 1
class Moto {
  public speed: number = 0;

  constructor(public name: string, public maxSpeed: number = 120) {}

  public buzinar() {
    console.log('Beep!!');
  }

  public acelerar(): number {
    this.speed += 10;
    this.speed > this.maxSpeed ? (this.speed = this.maxSpeed) : this.speed;
    return this.speed;
  }

  public frear(): number {
    this.speed -= 10;
    this.speed < 0 ? (this.speed = 0) : this.speed;
    return this.speed;
  }
}

let cbr = new Moto('Honda', 165);
cbr.buzinar();
console.log(cbr.speed);
while (cbr.speed < cbr.maxSpeed) console.log(cbr.acelerar());
while (cbr.speed > 0) console.log(cbr.frear());
cbr.buzinar();

// Exercício 2

abstract class Objeto2D {
  constructor(public base: number = 0, public altura: number = 0) {}

  abstract area(): number;
}

class Triangulo extends Objeto2D {
  area(): number {
    return (this.base * this.altura) / 2;
  }
}

class Retangulo extends Objeto2D {
  area(): number {
    return this.base * this.altura;
  }
}

const r1 = new Retangulo(5, 7);
console.log(r1.area());

const t1 = new Triangulo(5, 8);
console.log(t1.area());

// Exercício 3

class Estagiario {
  private _primeiroNome: string = '';

  get nome(): string {
    return this._primeiroNome;
  }

  set nome(value: string) {
    value.length >= 3
      ? (this._primeiroNome = value)
			: (this._primeiroNome = '');
  }
}

const e1 = new Estagiario
e1.nome = 'Pedro';
console.log(e1)