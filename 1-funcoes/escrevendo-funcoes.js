function  escrevaNome(nome) {
  // console.log(`Meu nome é ${nome}`)
  
  // usando return para retornar como testo e não como um console.log
  return  `Meu nome é ${nome}`;

}

function maiorIdade(idade, nome) {
  if(idade >= 18) {
    console.log(`${escrevaNome(nome)} e sou maior de idade.`);
  } else {
    console.log(`${escrevaNome(nome)} e sou menor de idade. `);
  }
}


maiorIdade(18, "Henrique");
maiorIdade(16, "Tom");
