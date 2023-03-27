//Faça um algoritimo que calcule a media de um aluno de uma faculdade e imprima o seu resultado conforme as condiçoes abaixos.

//media = (nota1 + nota2 + nota3) / 3

//Clasificaçao
// nota menor que 5 reprovado
// nota entre 5 e 7 recuperaçao.
// nota acima de 7 passou de semestre.

let nota1 = 10;
let nota2 = 10;
let nota3 = 10;
let media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if(media < 5){
    console.log("aluno reprovado");
}else if(media > 5 && media < 7){
    console.log("recuperaçao");
}else if(media > 7){
    console.log("aluno passou de semestre");
}