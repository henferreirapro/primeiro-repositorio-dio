const { gets, print } = require('./funcoes-auxiliares');

const quantidadeAlunos = gets();
let maiorValorEncontrado = 0;
let menorNumeroSorteado = quantidadeAlunos;

for(let i = 0; i < quantidadeAlunos; i++) {
  const numeroSorteado = gets();
  
  if(numeroSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numeroSorteado;
  } 
  if(numeroSorteado < menorNumeroSorteado) {
    menorNumeroSorteado = numeroSorteado;
  }
  
}

print(`Maior número: ${maiorValorEncontrado}`);
print(`Menor número: ${menorNumeroSorteado}`);