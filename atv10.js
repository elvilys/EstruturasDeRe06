
let altura =parseFloat(prompt(`Por favor digite sua altura:`))
let sexo = (prompt(` Qual é seu sexo ? Por favor digite n1 para femenino ou n2 para masculino`))


switch (+sexo) {
    case 1:
       let pesoIdealFem = (62.1 * altura) - 44.7;
document.write(`seu peso ideal é ${pesoIdealFem} kg`)
        break;
    case 2:
       let pesoIdealMasc = (72.7 * altura) - 58;
       document.write(`seu peso ideal é ${pesoIdealmasc} kg`)      
        break;
    
}
