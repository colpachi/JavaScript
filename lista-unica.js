const clientes = [
    {
            nome:"Andre", 
            idade:36,
            cpf:"123456789",
            email:"andre@email.com",
            fones:["55912345498","5521988743124"],
            dependentes: [{
                nome:"Sara Silva",
                parentesco:"filha",
                dataNasc:"20/03/2011"
            }]
    },
    {
            nome:"Juliana", 
            idade:25,
            cpf:"123456789",
            email:"juliana@email.com",
            fones:["55912345498","5521988743124"],
            dependentes: [{
                nome:"Felipe Silva",
                parentesco:"filho",
                dataNasc:"20/03/2018"
            
        }]
    }
]

//operador de espalhamento (spread operator): entrou em cada dependente, e copiou para a lista de dependentes
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes)

