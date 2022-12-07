/*let lines = gets().split("\n"); 
let n = parseInt(lines.shift()); 

if (n <= 2) { 

 print(n); 

} 
Entrada = inteiro positivo N
Saída = valor fatorial desajeitado de N

*/

const n = 4
let fatorial = n

const operacao = ['*', '/', '+', '-']
let vez = 1;

for (let i = n; i > 1; i--) {
    if (operacao[vez - 1] === '*') {
        fatorial = fatorial * (i - 1)
        vez = vez + 1
    }
    else if (operacao[vez - 1] === '/') {
        fatorial = fatorial / (i - 1)
        vez = vez + 1
    }
    else if (operacao[vez - 1] === '+') {
        fatorial = fatorial + (i - 1)
        vez = vez + 1
    }
    else if (operacao[vez - 1] === '-') {
        fatorial = fatorial - (i - 1)
        vez = 1;
    }

    console.log(fatorial);
}




