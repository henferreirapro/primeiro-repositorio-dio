/** CONDIÇÕES DE DESCONTO
 * 1 - À vista Debito, 10% de desconto;
 * 2 - À vista Pix, 15% de desconto;
 * 3 - Em duas vezes, valor normal do produto;
 * 4 - Mais de duas vezes, 10% de juros;
*/

function aplicarDesconto(condPagamento,preçoProduto) {
  if(condPagamento === 1) {
    // 10% desconto
    console.log(preçoProduto - (preçoProduto * 0.1));
  
  } else if(condPagamento === 2) {
    // 15% desconto
    console.log(preçoProduto - (preçoProduto * 0.15));
  
  } else if(condPagamento === 3) {
    // preço normal
    console.log(preçoProduto);

  } else {
    // 10% juros
    console.log(preçoProduto + (preçoProduto * 0.10));

  }
}

aplicarDesconto(1, 100);
aplicarDesconto(2, 100);
aplicarDesconto(3, 100);
aplicarDesconto(4, 100);
  