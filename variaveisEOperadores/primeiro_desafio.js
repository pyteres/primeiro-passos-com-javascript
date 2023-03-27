//Crie um progama que calcule o valor gasto em uma viagCrie um progama que calcule o valor gasto em uma viagem.

//voce tera treis variaveis:

//1- Preço do combustivel.
//2 - Gasto medio do combustivel do carro por km.
//3 - Distancia em KM da viagem.

//Emprima o valor gasto de gasolina nesta viagem.


let preçoCombustivel = 10;
let gastoMedioKm = 80;
let distancia = 4;

let litrosConsumidos = gastoMedioKm / distancia;
let valorGasto = litrosConsumidos / preçoCombustivel;
console.log(valorGasto.toFixed(2)); // voce usa o atributo toFixed para  dar um valor mais exato