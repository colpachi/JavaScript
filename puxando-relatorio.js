const cliente = {
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
}

let relatorio="";

//for in é um método de percorrer objetos
for ( let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    } else{
        relatorio += ` 
        ${info} ==> ${cliente[info]}
        `
    }    
}

console.log(relatorio)