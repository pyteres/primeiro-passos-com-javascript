//Elabore um algoritimo que calcule o que deve ser  pago por um produto considerando o preço normal da etiqueta e a escolha de condiçao de pagamento.
//Utilize os codigos de tabela a seguir para ler a condiçao de pagamento escolhido e efetuar o calculo adequado
//Codigo condiçao de pagamento
//A vista debito 10% de desconto.
//A vista no dinheiro ou no pix 15% de desconto.
//Em duas vezes preço normal da etiqueta sem juros.
//Acima de duas vezes  preço normal de etiqueta mais 10%.

let preçoEtiqueta = 100;
let formatoPagamento = 1;

if(formatoPagamento === 1){
    console.log(preçoEtiqueta - (preçoEtiqueta * 0.1));
}else if(formatoPagamento === 2){
    conaole.log(preçoEtiqueta - (preçoEtiqueta * 0.15));
}else if(formatoPagamento === 3){
    console.log(preçoEtiqueta);
}else if(formatoPagamento === 4){
    conaole.log(preçoEtiqueta + (preçoEtiqueta * 0.1));
}