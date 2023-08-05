let verifNumero = (prompt(` Por favor Digite um número para verificar se é primo`));
let numPrimo = true;

if(verifNumero === 1){
    numPrimo = false;
} else if(verifNumero > 1){
    for (let i =2; i < verifNumero; i++){
        if (verifNumero % i === 0){
            numPrimo = false;
        }
    }
}

if (numPrimo){
    console.log(verifNumero +` é um número primo`)
} else {
    console.log(verifNumero + ` não é um número primo.`)
}