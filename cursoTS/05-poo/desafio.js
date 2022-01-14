"use strict";
// Exercício 1
class Moto {
    constructor(name, maxSpeed = 120) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.speed = 0;
    }
    buzinar() {
        console.log('Beep!!');
    }
    acelerar() {
        this.speed += 10;
        this.speed > this.maxSpeed ? (this.speed = this.maxSpeed) : this.speed;
        return this.speed;
    }
    frear() {
        this.speed -= 10;
        this.speed < 0 ? (this.speed = 0) : this.speed;
        return this.speed;
    }
}
let cbr = new Moto('Honda', 165);
cbr.buzinar();
console.log(cbr.speed);
while (cbr.speed < cbr.maxSpeed)
    console.log(cbr.acelerar());
while (cbr.speed > 0)
    console.log(cbr.frear());
cbr.buzinar();
// Exercício 2
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class Triangulo extends Objeto2D {
    area() {
        return (this.base * this.altura) / 2;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const r1 = new Retangulo(5, 7);
console.log(r1.area());
const t1 = new Triangulo(5, 8);
console.log(t1.area());
// Exercício 3
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get nome() {
        return this._primeiroNome;
    }
    set nome(value) {
        value.length >= 3
            ? (this._primeiroNome = value)
            : (this._primeiroNome = '');
    }
}
const e1 = new Estagiario;
e1.nome = 'Pedro';
console.log(e1);
//# sourceMappingURL=desafio.js.map