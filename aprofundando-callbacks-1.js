const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num) {
    return num * 10
}

const arraySomada = arrayNums.map(multiplicaPorDez)

/* Porque a função callback (aqui a função que é chamada a cada interação do metodo map) multiplicaPorDez
em sua declaração pede um numero e no callback não precisamos informar? 

O Javascript entende que multiplicaPorDez é um valor, o qual recebe, a cada iteração
do método map, o valor de cada item do array arrayNums que então é passado para a função multiplicaporDez.

*/

console.log(arraySomada)
