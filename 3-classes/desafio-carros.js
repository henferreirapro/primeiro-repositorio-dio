/**DESAFIO
 * Crie uma classe para representar  carros.
 * 
 * Os carros possuem uma marca, cor e um gasto médio de combustivel por km rodado.
 * 
 * Crie um método que dado a quantidade de km e o preço do combustivel nos de o
   o valor gasto em reais para realizar este percurso.
*/

class Carros {
  marca;
  cor;
  kmGastoMedio;
  
  constructor(marca, cor, kmGastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.kmGastoMedio = kmGastoMedio;
    
  } 
  
  calcularCombustivelTrajeto(kmDistancia, kmCombustivel) {
    // return kmDistancia * this.kmGastoMedio * kmCombustivel;
    const valorGasto = kmDistancia * this.kmGastoMedio * kmCombustivel;
    return `O valor gasto foi de R$${valorGasto.toFixed(2)} reais.`;
  }

}

const focus = new Carros("Ford", "Preto", 1/8);
const uno = new Carros("Fiat", "Amarelo", 1/12)

const gastoFocus = focus.calcularCombustivelTrajeto(70, 5);
const gastoUno = uno.calcularCombustivelTrajeto(70, 5);


console.log(gastoFocus);
console.log(gastoUno);
