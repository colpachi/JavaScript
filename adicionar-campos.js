const cliente = {
    nome:"Andre", 
    idade:36,
    cpf:"123456789",
    email:"andre@email.com"
}

/* adiciona a chave fone com o valor 42312433 pois ela não existe
caso a chave já exista, ela é substituida pelo valor passado */
cliente.fone = "42312433"

console.log(cliente)