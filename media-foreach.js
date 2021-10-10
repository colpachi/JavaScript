const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//função callback -> função que chama devolta outra função
//notação com arrow function, mais utilizada, mais breve
notas.forEach(nota =>{
    somaDasNotas += nota
})

/* //notação com declaração de função
notas.forEach(function(nota){
    somaDasNotas += nota
}) */

let media = somaDasNotas/notas.length

console.log(media)