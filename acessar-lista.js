const cliente = {
    nome:"Andre", 
    idade:36,
    cpf:"123456789",
    email:"andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

//acessando o objeto através da notação de colchetes

/* Note que sempre que você precisar utilizar uma váriavel como referência
para acessar um valor de objeto, devemos utilizar a notação de colchetes */
console.log(cliente[chaves[0]])

/* Se eu fosse fazer console.log(cliente.chave) o JS entenderia não que
estaria tentando passar uma variável, mas sim ele tentaria acessar direto o objeto
que por sua vez não possui uma chave com o nome de "chave" */

/*utilizando a arrow function já que o método forEach precisa de uma função de retorno
(callback) para funcionar */
chaves.forEach(info => console.log(cliente[info]))

//também podemos utilizar a notação de colchetes como abaixo
console.log(cliente["nome"])

/*note que se você tentar acessar uma chave que não existe, o JS não vai dar erro
por isso levar em consideração esse comportamento na hora de debugar o codigo*/
console.log(cliente["conta"]) //undefined