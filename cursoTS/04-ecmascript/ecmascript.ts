console.log(date);
var date; // hoisting phenomenon: var é um tipo de variavel automaticamente global ao ser declarada
date = new Date();
console.log(date);

console.log(/*date1*/); // -> ERRO
let date1; // hoisting phenomenon: let é um tipo de variavel automaticamente local ao ser declarada
date1 = new Date(1988, 8, 20);
console.log(date1);

var segredo = 'externo!';
function revelar() {
  const segredo = 'interno';
  console.log(segredo);
}
revelar();
console.log(segredo);

{
  {
    const def = 'def';
    console.log(def);
  }
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
// console.log(i)

// Arrow Function
function somar(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(2, 3));

const saudacao = () => console.log('Olá!');
saudacao();

const falarCom = (pessoa: string) => console.log('Ola ' + pessoa);
falarCom('João');

// this

// function normalComThis() {
//   console.log(this);
// }
// const arrowComThis = normalComThis.bind('teste');

// arrowComThis();

const contagemRegressiva = (inicio: number = 5): void => {
  console.log(inicio);
  while (inicio > 0) {
    inicio--;
    console.log(inicio);
  }
};

contagemRegressiva(2);

// Rest Spread

const nums: number[] = [1, 131, -5, 28, 73, 1034];
console.log(Math.max(...nums));
console.log(Math.min(...nums));

const turmaA: string[] = ['Pedro', 'João', 'Fernada'];
const turmaB: string[] = ['José', 'Cassio', 'Jonas', ...turmaA];
console.log(turmaA);
console.log(turmaB);

const dobro = (valor: number): number => valor * 2;

console.log(dobro(10));

const dizerOla = (nome: string = 'Pessoa'): void => {
  console.log('Ola, ' + nome);
};
dizerOla();
dizerOla('Anna');

const nums2: number[] = [-3, 33, 38, 5];
console.log(Math.min(...nums2));

const nums3 = [-3, 33, 38, 5];
const array = [55, 20];
array.push(...nums3);
console.log(array);

const notas = [8.5, 6.3, 9.4];
const [n1, n2, n3] = notas;
console.log(n1, n2, n3);

const cientista = { primeiroNome: 'Will', experiencia: 12 };
const { primeiroNome: n, experiencia: e } = cientista;
console.log(n);
console.log(e);

// Callback functions

function wait(callback: (data: string) => void) {
  setTimeout(() => {
    callback('3s depois');
  }, 3000);
}

wait(function (result) {
  console.log(result);
});

function waitPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve('4s depois');
    }, 4000);
  });
}

waitPromise().then(data => console.log(data));

// fetch('https://swapi.dev/api/people/1')
//   .then(res => res.json())
//   .then(char => char.films)
//   .then(films => {
//     films.forEach((film: any) =>
//       fetch(film)
//         .then(res => res.json())
//         .then(film => film.characters)
//         .then(chars => {
//           chars.forEach((character: any) => {
//             fetch(character)
//               .then(res => res.json())
//               .then(character => console.log(character.name));
//           });
//         }),
//     );
//   });

fetch('https://game-of-thrones-quotes.herokuapp.com/v1/characters')
  .then(res => res.json())
  .then(data => {
    data.forEach((character: any) => console.log(character.slug));
  });
