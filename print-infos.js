const cliente = {
    nome:"Andre", 
    idade:36,
    cpf:"123456789",
    email:"andre@email.com"
}

/* acessando os valores do objeto cliente, utilizando a 
técnica de template string e o conceito de interpolação.*/
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)

/*lembrando que ao acessar os valores, instantaneamente obtemos acesso aos métodos
herdados dos respectivos tipos de dados, veja abaixo, o acesso ao método substring
que é próprio das strings é garantido uma vez que estamos acessando a chave cpf */
console.log(cliente.cpf.substring(0,3)) 