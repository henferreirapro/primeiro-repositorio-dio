const entradas = [50, 10, 98, 23, 2, 1, 5];
let i = 0;

function gets() {
  const valor = entradas[i];
  i++;
  
  return valor;
}

function print(texto) {
  console.log(texto);
}

module.exports = {gets, print};
