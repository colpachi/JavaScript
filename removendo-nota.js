const notas = [10, 7, 8, 5, 10]
notas.pop()
console.log(notas)

media = (notas[0] + notas[1] + notas[2] +notas[3]) / notas.length

// aqui não foi declarada a variavel media, então o javascript automaticamente atribuiu como uma var.
// não é uma boa prática.

console.log(`A média é ${media}.`) //utilizando template string.