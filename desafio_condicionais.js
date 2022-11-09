
/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por litro;
5 - Distância em KM da viagem;

Imprimir no console o valor que será gasto para realizar a viagem.

*/

const precoEtanol = 5.79
const precoGasolina = 6.66
const kmPorLitro = 10
const distanciaEmKm = 100
const tipoCombustivel = 'etanol';

const litrosconsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'etanol') {
    const valorGasto = litrosconsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    const valorGasto = litrosconsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}