//1.Declare uma variavel de nome weight
let weight;

//2.Que tipo de dado e a variavel acima?
//undefined
console.log(typeof weight);

//3.Declare uma variavel e atribua valores para cada dado
//name: String
//age: Number (int)
//stars: Number (float)
//isSubscribed: Boolean
let name = 'John';
let age = 30;
let stars = 4.2;
let isSubscribed = false;

//4.A variavel student abaixa e que tipo de dado?
//4.1. Atribua a ela os dados do ex3.
//4.2. mostrar no console <name> de idade <age> pesa <weight> kg.
let student = {};
//tipo de dado: objeto
console.log(typeof student);

student = {
  name: 'John',
  age: 30,
  stars: 4.2,
  isSubscribed: false,
  weight: 90
};

console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
  );

//5. Declare uma variavel de tipo Array, de nome students e atribua a ela nenhum valor.
let students = [];

//6. Reatribua valor a ela com o obj do ex4.
students = [student];

//7. Coloque no console a posicao 0 dela
console.log(students[0]);

//8. Crie um novo student e coloque na posicao 1
let newStudent = {
  name: 'Will',
  age: 30,
  stars: 4.2,
  isSubscribed: false,
  weight: 80
};

students[1] = newStudent;

console.log(students);

//9. qual a resp do cod abaixo e pq?
/*
 console.log(a);
 var a = 1;
 
 Resp: udefined, no caso da variavel sem var o js faz o hoisting,
 declarando ela em cima mas sem atribuicao de valor no console.log
 */

console.log(a);
var a = 1;