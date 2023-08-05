const precoTabela = parseFloat(prompt("Digite o preço de tabela:"));
const numeroParcelas = parseInt(prompt("Digite o número de vezes do pagamento:"));

let valorParcela;
let precoTotal;

if (numeroParcelas === 1) {
  
  valorParcela = precoTabela * 0.975;
  precoTotal = valorParcela;
} else if (numeroParcelas >= 2 && numeroParcelas <= 5) {
  // Pagamento de 2 até 5 vezes sem desconto ou acréscimo
  valorParcela = precoTabela / numeroParcelas;
  precoTotal = precoTabela;
} else if (numeroParcelas >= 6 && numeroParcelas <= 10) {
  // Pagamento de 6 até 10 vezes com juros de 6%
  valorParcela = (precoTabela * 1.06) / numeroParcelas;
  precoTotal = precoTabela * 1.06;
} else if (numeroParcelas >= 11 && numeroParcelas <= 15) {
  // Pagamento de 11 até 15 vezes com juros de 13%
  valorParcela = (precoTabela * 1.13) / numeroParcelas;
  precoTotal = precoTabela * 1.13;
} else {
  console.log("Opção de pagamento inválida.");
}

if (valorParcela && precoTotal) {
  console.log("Valor da parcela: " + valorParcela.toFixed(2));
  console.log("Preço total da compra: " + precoTotal.toFixed(2));
}