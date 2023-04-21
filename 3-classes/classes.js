// Responsabilidade da class é definir como é algo, nesse caso definir como 
// é uma Pessoa
class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  descrever() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }

  // parametros que precisam ser preenchidos quando usamos a classe
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }
}

// Criando uma instancia de uma class
const henrique = new Pessoa("Henrique", 28);
const michele = new Pessoa("Michele", 24);

// chamando
console.log(henrique);
console.log(michele);
