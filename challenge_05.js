/*

3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da  condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adquado.

Código Condição de pagamento:
1 - À vista débito, recebe 10% de desconto;
2 - À vista no dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

*/

const precoEtiquetaProduto = 100;
const tipoPagamento = 4
const pagtoDebito = precoEtiquetaProduto *0.1;
const pagtoDinheiro = precoEtiquetaProduto *0.15;
const pagtoDuasVezes = precoEtiquetaProduto;
const pagtoAcimaDuasVezes = precoEtiquetaProduto /0.1;


if (tipoPagamento === 1){
console.log(precoEtiquetaProduto - (precoEtiquetaProduto *0.1))
}
else if (tipoPagamento === 2) {
    console.log(precoEtiquetaProduto - (precoEtiquetaProduto *0.15));
}
else if (tipoPagamento === 3) {
    console.log(precoEtiquetaProduto);
}
else {
    console.log(precoEtiquetaProduto + (precoEtiquetaProduto *0.1));
}
