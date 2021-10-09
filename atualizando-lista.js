const listaDeChamada = ['João', 'Ana', 'Caio','Lara', 'Marjorie', 'Leo']

//Ana e Caio mudaram de escola, e entrou um aluno novo nesta sala, o Rodrigo.

listaDeChamada.splice(1,2,'Rodrigo')

//Splice também pode adicionar novos elementos sem remover nenhum, veja

 listaDeChamada.splice(2,0,'Marcos')

console.log(listaDeChamada)