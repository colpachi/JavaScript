//um aluno recebeu um ponto extra em suas notas, calcule a utilizando o metodo map

const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota) //função callback que recebe uma arrow function com operador ternário

/* diferentemente do foreach (que não retorna nada, apenas itera entre os itens de um array), 
o metodo map retorna um array atualizado */

console.log(notasAtualizadas)

// ++nota é diferente de nota++
// o primeiro, adiciona +1 e depois retorna
// o segundo retorna, depois adiciona + 1