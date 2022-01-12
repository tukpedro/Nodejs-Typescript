"use strict";
console.log(date);
var date; // hoisting phenomenon: var é um tipo de variavel automaticamente global ao ser declarada
date = new Date();
console.log(date);
console.log( /*date1*/); // -> ERRO
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
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log('Olá!');
saudacao();
const falarCom = (pessoa) => console.log('Ola ' + pessoa);
falarCom('João');
// this
function normalComThis() {
    console.log(this);
}
const x = normalComThis.bind('teste');
x();
//# sourceMappingURL=ecmascript.js.map