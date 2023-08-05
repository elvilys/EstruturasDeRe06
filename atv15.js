const ladoA = Number(prompt('Diga o lado A do triângulo: '));
const ladoB = Number(prompt('Diga o lado B do triângulo: '));
const ladoC = Number(prompt('Diga o lado C do triângulo: '));
const compararLadosAB = ladoA + ladoB
const compararLadosAC = ladoA + ladoC
const compararLadosBC = ladoB + ladoC

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
 
  if (ladoA === ladoB && ladoB === ladoC) {
    document.write("O triângulo é equilátero.");
  } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
    document.write("O triângulo é isósceles.");
  } else {
    document.write("O triângulo é escaleno.");
  }
} else {
  document.write("Os lados fornecidos não formam um triângulo.");
}