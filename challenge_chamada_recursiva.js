
// TODO: Implemente um método que calcule o somatório de um número usando recursividade:



// Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   

// Entrada: A Entrada será composta por um número inteiro, N. 
// Saída: Será  impresso o somatório de N até 0, como no exemplo a baixo: 

// let somatorio = 0;
// for (let i = n; i >= 0; i--) {
//     somatorio = somatorio + i;
// }

const n = 4

function somatorio(num) {
    if (num === 0) return 0;

    return num + somatorio(num - 1);
}


console.log(somatorio(n));