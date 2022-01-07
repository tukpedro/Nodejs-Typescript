const channel: string = 'NerdBTC'
const subscriptions: number = 1000000

// channel = subscriptions; -> gera ERRO, porém com o 'noEmitOnError' marcado como 'true', o tsc nao vai gerar o arquivo js

// let myName = 'pedro' -> gera ERRO pq foi declarado em outro arquivo e não foi setado para usar modulos.

// "sourceMap": true -> gera o arquivo .js.map que serve para o browser mapear o arquivo .ts

// function sum(a, b) { return a + b } -> gera ERRO pq o tsc está setado "noImplicitAny": true, ou seja, vc tem que declarar o tipo dela.

// "strictNullChecks": true -> verifica se uma variavel pode vir null

// 