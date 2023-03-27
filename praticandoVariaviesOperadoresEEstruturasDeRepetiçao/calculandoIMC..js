//O IMC - indice de massa corporal e um criterio da organizaçao mundial da saude para dar uma indiçaçao sobre a condiçao de peso de uma pessoa adulta.

//Calculo do IMC
//IMC = peso / (altura * altura);

//Crie um algoritimo que calcula o IMC de uma pessoa adulta mostre a sua condiçao de acordo com a tabela abaixo.

//IMC em adulto condiçoes.
//Abaixo de 18.5 abaixo do peso.
//Entre 18.5 e 25 peso normal.
//Entre 25 e 30 acima do peso
//Entre 30 e 40 obeso.
//Acima de 40 obesidade grave

let peso = 35
let altura = 1.70;
let IMC = peso / (altura * altura);
console.log(IMC);

if(IMC < 18.5){
    console.log("abaixo do peso");
}else if(IMC > 18.5 && IMC < 25){
    console.log("peso medio");
}else if(IMC > 25 && IMC < 30){
    console.log("acima do peso");
}else if(IMC > 30 && IMC < 40){
    console.log("obeso");
}else if(IMC > 40){
    console.log("obesidade grave");
}