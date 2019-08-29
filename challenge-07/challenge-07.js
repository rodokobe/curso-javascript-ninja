/*
Crie um array com 5 items (tipos variados).
*/

var rodolfo = [ 'Sales', 30, true, null, function mostraIdade() { return '30 anos'; } ]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/

function addItem(itemToAdd) {
rodolfo.push(itemToAdd);
  return rodolfo;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/

addItem([ 'masculino', 1982, function retornaSexo() { return rodolfo[6]() } ]);

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

'O segundo elemento do segundo array é ' + rodolfo[6][1];

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/

'O primeiro array tem ' + rodolfo.length + ' itens.';

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/

'O segundo array tem ' + rodolfo[6].length + ' itens.';

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/

function retornaPares(x) {
  while (x <= 20) {
    x % 2 === 0 ? console.log('Número par: ' + x) : '';
    x++;
  }
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/


function retornaImpares(x) {
  while (x <= 20) {
    x % 2 === 1 ? console.log('Número ímpar: ' + x) : '';
    x++;
  }
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/

function retornaPares2() {
  for (var y = 100; y <= 120; y++) {
    y % 2 === 0 ? console.log('Número par: ' + y) : '';
  }
}

console.log( 'Números ímpares entre 111 e 125:' );


function retornaImpares2() {
  for (var y = 111; y <= 125; y++) {
    y % 2 === 1 ? console.log('Número ímpar: ' + y) : '';
  }
}
