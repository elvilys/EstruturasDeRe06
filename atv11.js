let turno =prompt(`Qual é seu turno:  M / V / N`).toUpperCase()

switch (turno) {
    case 'M':
document.write(`Bom dia!`);
      break;
    case 'V':
        document.write(`Boa tarde!`);
      break;
    case 'N':
        document.write(`Boa noite!`);
      break;
    default:
        document.write(`valor inválido.`);
  }