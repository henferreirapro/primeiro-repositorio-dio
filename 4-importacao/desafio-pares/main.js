const { gets, print } = require('./funcoes-auxiliares');

const entradas = gets();
let par = [];
for(let i = 0; i < entradas.length; i++) {
  const numeroSorteado = entradas[i];
  
  if(numeroSorteado % 2 === 0) {
    par.push(numeroSorteado);
  }
}
print(`Números Pares:${par}.`);
print(par)
