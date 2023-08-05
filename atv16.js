
const anoAtual = Number(prompt(`digite o ano atual:`))
const anoNascimento = Number(prompt(`digite o ano que nasceu:`))


const idade = anoAtual - anoNascimento;


if (idade >= 16) {
    document.write("Você pode votar este ano!");
} else {
 document.write("Você não pode votar este ano.");
}