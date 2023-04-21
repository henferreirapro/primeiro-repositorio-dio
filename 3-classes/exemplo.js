// Criando uma função que usa classe para comparar a  idade de duas pessoas.

class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  descrever() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }
}

function compararPessoas(pessoa1, pessoa2) {
  if(pessoa1.idade > pessoa2.idade) {
    console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}.`);
  
  } else if(pessoa1.idade < pessoa2.idade) {
    console.log(`${pessoa2.nome} é mais velha que ${pessoa1.nome}.`);
  
  } else {
    console.log(`${pessoa1.nome} e ${pessoa2.nome} tem ${pessoa1.idade} anos.`);
  
  }

}

const henrique = new Pessoa("Henrique", 28);
const michele = new Pessoa("Michele", 24);

compararPessoas(henrique, michele);