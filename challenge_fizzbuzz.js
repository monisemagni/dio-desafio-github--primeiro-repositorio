// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

//let resultado = gets();
//print(fizzBuzz(resultado));

//TODO: Caso o valor não seja múltiplo de 3 ou 5, exiba o número, conforme o enunciado.

// Entrada:
// Se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
// Se o número for apenas múltiplo de 3 -> "Fizz" ; 
// Se o número for apenas múltiplo de 5 -> "Buzz"; 
// Se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; 

// Saída:
//Retorne a palavra correta de acordo com o seu múltiplo.

const numero = 15

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log('FizzBuzz')
}

else if (numero % 3 === 0) {
    console.log('Fizz');
}

else if (numero % 5 === 0) {
    console.log('Buzz')
}

else {
    console.log(numero);
}

