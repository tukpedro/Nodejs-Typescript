"use strict";
// *** STRING ***
let myName = 'Pedro';
console.log(myName);
// myName = 23; -> Não aceita outro tipo. Apenas STRING;
myName = 'Pedro Pastuk'; // -> aceita somente tipo string;
console.log(myName);
console.log(typeof myName);
// No momento em que se inicializa uma variavel com algum dado,
// ela só aceitará receber dados do mesmo tipo deste dado em que foi inicializada;
// *** NUMBER ***
let age = 33;
console.log(age);
// let age = 'olá'; ->  Não aceita outro tipo. Apenas NUMBER;
age += 0.5;
console.log(age);
console.log(typeof age);
// *** BOOLEAN ***
let active = true;
console.log(active);
// active = 1; ->  Não aceita outro tipo. Apenas BOOLEAN;
active = false;
console.log(active);
console.log(typeof active);
// *** TIPOS EXPLÍCITOS ***
let data1;
// Declarei uma váriável que pode receber ANY tipos
data1 = 'TEXT';
console.log(data1);
console.log(typeof data1);
data1 = 50;
console.log(data1);
console.log(typeof data1);
data1 = true;
console.log(data1);
console.log(typeof data1);
let data2;
// Declarei uma váriável que pode receber apenas tipo NUMBER
data2 = 100;
console.log(data2);
console.log(typeof data2);
// data2 = true -> Não vai aceitar outro tipo
// *** ARRAYS ***
let hobbies = [1, 2, 3, 4];
// Declarei um array que pode receber apenas ANY tipos
console.log(hobbies);
console.log(typeof hobbies);
hobbies = ['oi', 'hello', 'hola'];
console.log(hobbies);
let numbers = [1, 2, 3, 4];
console.log(numbers);
// numbers = ['oi', 'hello', 'hola']; ->  Não aceita outro tipo de dados. Apenas NUMBER
numbers = [9, 6, 8, 4];
console.log(numbers);
// *** TUPLAS ***
let adress = ['Rua Boa', 999];
console.log(adress);
// adress[2, 5]; ->  Aceita apenas a sequencia de STRING e NUMBER
// *** ENUMS ***
var semanaUtil;
(function (semanaUtil) {
    semanaUtil[semanaUtil["Segunda"] = 2] = "Segunda";
    semanaUtil[semanaUtil["Ter\u00E7a"] = 3] = "Ter\u00E7a";
    semanaUtil[semanaUtil["Quarta"] = 4] = "Quarta";
    semanaUtil[semanaUtil["Quinta"] = 5] = "Quinta";
    semanaUtil[semanaUtil["Sexta"] = 6] = "Sexta";
})(semanaUtil || (semanaUtil = {}));
console.log(semanaUtil.Sexta);
// *** FUNÇÕES ***
function returnName(name) {
    return name;
}
// Função que retorna uma string, pedindo um parâmetro string
console.log(returnName('Pedro'));
console.log(returnName('Luana'));
const sayHiTo = (name) => {
    console.log(`Hi, ${name}!`);
};
// Função que retorna void, pedindo um parâmetro string
sayHiTo('Pedro');
const multiply = (num1, num2) => {
    return num1 * num2;
};
// Função que retorna number, pedindo parâmetros number
console.log(multiply(6, 9));
const verify = (num1, num2) => {
    return num1 * num2 < 14;
};
// Função que retorna boolean, pedindo parâmetros number
console.log(verify(2, 9));
let calculate;
calculate = multiply;
console.log(calculate(2, 9));
const user = {
    name: 'John',
    age: 30,
};
const users = [user];
const createUser = (name, age) => {
    const user = {
        name: name,
        age: age,
    };
    return user;
};
users.push(createUser('Pedro', 33));
users.push(createUser('Luana', 35));
console.log(users);
const arriveTime = (time) => {
    if (time <= 8)
        return 'Normal';
    return 'Fora de horário';
};
const fail = (msg) => {
    throw new Error(msg);
};
const createEmployee = (supervisors, time) => {
    if (time < 0 || time > 24)
        return fail('Invalid time!');
    const employee = {
        supervisors: supervisors,
        registerTime: arriveTime(time),
    };
    return employee;
};
const employees = [];
employees.push(createEmployee(['John', 'Mellon'], 9));
employees.push(createEmployee(['Mary', 'James'], 7));
console.log(employees);
employees.push(createEmployee(['Jin', 'Marv'], 59));
