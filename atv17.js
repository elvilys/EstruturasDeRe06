
const totalEleitores = parseInt(prompt('Qual o número de eleitores: '))
const votosBrancos   = parseInt(prompt('Qual o número de votos brancos: '))  
const votosNulos    = parseInt(prompt('Qual o número de votos nulos: '))
const votosValidos  = totalEleitores - (votosBrancos + votosNulos) 

const totalVotos = votosBrancos + votosNulos + votosValidos;
if (totalVotos <= totalEleitores) {

  const percentualBrancos = (votosBrancos / totalEleitores) * 100;
  const percentualNulos = (votosNulos / totalEleitores) * 100;
  const percentualValidos = (votosValidos / totalEleitores) * 100;

 document.write("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "% <br> <br>");
 document.write("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "% <br> <br>");
 document.write("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "% <br><br>");
} else {
    document.write("Erro: A soma dos votos é maior que o número total de eleitores.");
}