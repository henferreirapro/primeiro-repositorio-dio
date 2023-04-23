/**DESAFIO
 * Crie uma classe para representar pessoa.
 * 
 * Para cada pessoa teremos os atributos nome, peso e altura.
 * 
 * As pessoas devem ter a capacidade de dizer o valor do seu IMC
   (IMC = peso / (altura * altura));

 * Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça
   para José dizer o valor do seu IMC;
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

  imcCalcular() {
    return this.peso / (this.altura * this.altura);
  }

  imcClassificar() {
    const imc = this.imcCalcular();
    const msg = `Meu nome é ${this.nome} e tenho ${imc.toFixed(2)} de IMC`
    
    if(imc < 18.50) {
      return `${msg}, estou abaixo do peso.`;
    } else if(imc < 25.00) {
      return `${msg}, estou no peso normal.`;
    } else if(imc <  30.00) {
      return `${msg}, estou classificado como obeso.`;
    } else {
      return `${msg}, estou com Obesidade grave.`;
    }


  }
}

const jose = new Pessoa("José", 70, 1.75);
const henrique = new Pessoa("Henrique", 86, 1.79);
const joao = new Pessoa("João", 50, 1.80)
const geraldo = new Pessoa("Geraldo", 130, 1.70)


// console.log(jose);
console.log(joao.imcClassificar());
console.log(jose.imcClassificar());
console.log(henrique.imcClassificar());
console.log(geraldo.imcClassificar());
