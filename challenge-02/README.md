# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function returnArgs(x, y) {
return (x+y);
}

returnArgs(10, 10);

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e
// somando `5` ao resultado retornado da função.

var invoca = returnArgs(2, 2) + 4

// Qual o valor atualizado dessa variável?
8

// Declare uma nova variável, sem valor.
var novaVariavel

Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function alteraVariavel() {
novaVariavel = 'Preencha todos os valores corretamente!';
}

// Invoque a função criada acima.
alteraVariavel();

// Qual o retorno da função? (Use comentários de bloco).
'Preencha todos os valores corretamente!'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

var x = 0;
var y = 0;
var z = 0;
var resultado = 0;
function calcular(x, y, z) {
  if ((x === 0) || (y === 0) || (z === 0)) {
    return novaVariavel;
  } else {
    resultado = (x * y * z) + 2;
    return resultado;
  }
}
calcular(0,0,0);
calcular(2,2,2);

// Invoque a função criada acima, passando só dois números como argumento.
calcular(2,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
calcular(2,2,2);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function leArgumentos(x=0, y=0, z=0) {
  if ((x === 0) && (y === 0) && (z === 0)) {
    return false;
  }
  else if ((x !== 0) && (y !== 0) && (z !== 0)) {
    return (x+y)/z;
  } else if ((x === 0) && (y === 0))  {
    return z;
  } else if ((x === 0) && (z === 0)) {
    return y;
  } else if ((y === 0) && (z === 0)) {
    return x;
  } else {
    if (x === 0) {
      return y + z;
    } else if (y === 0) {
      return x + z;
    } else if (z === 0) {
      return x + y;
    }
  }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?
