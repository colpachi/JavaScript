const cliente = {
    nome:"Andre", 
    idade:36,
    cpf:"123456789",
    email:"andre@email.com",
    fones:["55912345498","5521988743124"]
}

//na verdade é um objeto sendo adicionado dentro de outro
cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"20/03/2011"
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)