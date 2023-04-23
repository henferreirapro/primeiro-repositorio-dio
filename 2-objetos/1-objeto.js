// Exemplo de um objeto
const pessoa = {
  nome: "Henrique",
  idade: 28,

  // add função dentro de um objeto, add um método
  descrever: function() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);  
  }
}

// add chaves e valores ao objeto
pessoa.altura = 1.79;

// excluindo chave e valor do objeto
// delete pessoa.nome;


// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.idade)

// acessando os valores diretamente
pessoa.descrever();

// acessando os valores de forma dinamica
/**
 * Dessa forma  podemos acessar o atributo puxando pela chave(atributo) 
   se não soubermos exatamente a chave, podemos usar como parametro. 
 */
console.log(pessoa["idade"]);