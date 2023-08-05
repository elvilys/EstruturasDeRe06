
  let salarioUsuario = (prompt(`digite seu salario:`));

  let limiteSalario = 1903.98;

  if (salarioUsuario <= 1903.98) {
    document.write(`Você esta insento no IR`)
  } else {
    document.write(`Você esta tributado no IR`)
  }

