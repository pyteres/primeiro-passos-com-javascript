//Crie um progama que calcule o valor gasto em uma viagCrie um progama que calcule o valor gasto em uma viagem.

//voce tera treis variaveis:

//1- Preço da gasolina.
//2 - Preço do etanol.
//3 - Gasto medio do combustivel do carro por km.
//4 - Distancia em KM da viagem.
//5 - O tipo de combustivel que esta no seu carro.


//Emprima o valor gasto de gasolina nesta viagem.

let preçoGasolina = 5.00;
let preçoEtanol = 4.50;
let gastoMedioKm = 30;
let distancia = 3;
let tipoCombustivel = "etanol";

let litrosConsumidos = distancia / gastoMedioKm;

if(preçoEtanol == "etanol"){
    valorGasto = litrosConsumidos * preçoEtanol;
}else{
    valorGasto = litrosConsumidos * preçoGasolina;
}

console.log(valorGasto.toFixed(2));