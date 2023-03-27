let numero = 0;

let numeroDicidioPorCinco = numero % 5 <= 0;

console.log(numeroDicidioPorCinco);

if(numero != 0){
    console.log("numero e invalido")
}else if(numeroDicidioPorCinco){
    console.log("sim")
}else{
    console.log("nao")
}