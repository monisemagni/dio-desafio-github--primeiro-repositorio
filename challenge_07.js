/*

2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do IMC ( IMC = peso /(altura*altura));
Instancie uma pessoa chamada José que tenha 70Kg de peso e 1.75 de altura, e peça ao José para dizer o valor do seu IMC.
*/


class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
    
        if (imc < 18.5) {
            return ('Abaixo do peso');
        }
        else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        }
        else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        }
        else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        }
        else {
            return ('Obesidade Grave');
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
const joseImc = jose.classificarImc();
console.log(joseImc);

const monise = new Pessoa('Monise', 85, 1.70);
console.log(monise.classificarImc());

