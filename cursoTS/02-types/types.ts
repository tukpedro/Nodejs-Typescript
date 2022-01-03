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
let data1: any;
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

let data2: number;
// Declarei uma váriável que pode receber apenas tipo NUMBER

data2 = 100;
console.log(data2);
console.log(typeof data2);

// data2 = true -> Não vai aceitar outro tipo

// *** ARRAYS ***
let hobbies: any[] = [1, 2, 3, 4];
// Declarei um array que pode receber apenas ANY tipos
console.log(hobbies);
console.log(typeof hobbies);

hobbies = ['oi', 'hello', 'hola'];
console.log(hobbies);

let numbers: number[] = [1, 2, 3, 4];
console.log(numbers);

// numbers = ['oi', 'hello', 'hola']; ->  Não aceita outro tipo de dados. Apenas NUMBER

numbers = [9, 6, 8, 4];
console.log(numbers);

// *** TUPLAS ***
let adress: [string, number] = ['Rua Boa', 999];
console.log(adress);

// adress[2, 5]; ->  Aceita apenas a sequencia de STRING e NUMBER

// *** ENUMS ***
enum semanaUtil {
  Segunda = 2,
  Terça,
  Quarta,
  Quinta,
  Sexta,
}
console.log(semanaUtil.Sexta);

// *** FUNÇÕES ***
function returnName(name: string): string {
  return name;
}
// Função que retorna uma string, pedindo um parâmetro string
console.log(returnName('Pedro'));
console.log(returnName('Luana'));

const sayHiTo = (name: string): void => {
  console.log(`Hi, ${name}!`);
};
// Função que retorna void, pedindo um parâmetro string
sayHiTo('Pedro');

const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};
// Função que retorna number, pedindo parâmetros number
console.log(multiply(6, 9));

const verify = (num1: number, num2: number): boolean => {
  return num1 * num2 < 14;
};
// Função que retorna boolean, pedindo parâmetros number
console.log(verify(2, 9));

let calculate: (num1: number, num2: number) => number;
calculate = multiply;
console.log(calculate(2, 9));

// *** OBJETOS ***
interface IUser {
  name: string;
  age: number;
}

const user: IUser = {
  name: 'John',
  age: 30,
};

const users: IUser[] = [user];

const createUser = (name: string, age: number): IUser => {
  const user: IUser = {
    name: name,
    age: age,
  };
  return user;
};

users.push(createUser('Pedro', 33));
users.push(createUser('Luana', 35));

console.log(users);

// // *** CHALLENGE ***
interface IEmployee {
  supervisors: string[];
  registerTime: string;
}

const arriveTime = (time: number): string => {
  if (time <= 8) return 'Normal';
  return 'Fora de horário';
};

const fail = (msg: string): never => {
  throw new Error(msg);
};

const createEmployee = (supervisors: string[], time: number): any => {
  if (time < 0 || time > 24) return fail('Invalid time!');

  const employee: IEmployee = {
    supervisors: supervisors,
    registerTime: arriveTime(time),
  };

  return employee;
};

const employees: IEmployee[] = [];

employees.push(createEmployee(['John', 'Mellon'], 9));
employees.push(createEmployee(['Mary', 'James'], 7));

console.log(employees);

employees.push(createEmployee(['Jin', 'Marv'], 59));