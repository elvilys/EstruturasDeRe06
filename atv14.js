
const numero = Number(prompt( `digite um número`))

let resultado = numero;


while (resultado <= 500) {
  resultado *= 3;
}

document.write("O último valor obtido é: " + resultado);