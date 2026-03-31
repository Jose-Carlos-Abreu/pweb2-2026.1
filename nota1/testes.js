import { Exam } from './lib/exam.js'; 

const pesosOficiais = [2, 2, 2, 2, 2];
const gabaritoOficial = ['v', 'f', 'v', 'f', 'v'];

const prova = new Exam(gabaritoOficial, pesosOficiais);

prova.add({
  student: 'José',
  answer: ['v', 'v', 'v', 'v', 'f'] 
});

console.log('Media:', prova.avg()); // '4.00'
console.log('Min:', prova.min()); // [ 4 ]
console.log('Max:', prova.max()); // [ 4 ]
console.log('Menor que 6 (lt):', prova.lt(6)); // [ 4 ]
console.log('Maior que 6 (gt):', prova.gt(6)); // []

prova.add({
  student: 'Carlos',
  answer: ['v', 'f', 'v', 'f', 'v'] 
});

console.log('Media:', prova.avg()); // '7.00'
console.log('Min:', prova.min()); // [ 4 ]
console.log('Max:', prova.max()); // [ 10 ]
console.log('Menor que 6 (lt):', prova.lt(6)); // [ 4 ]
console.log('Maior que 6 (gt):', prova.gt(6)); // [ 10 ]