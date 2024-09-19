const prompt = require("prompt-sync")()    //adiciona pacote para a entrada de dados
const num1 = Number(prompt("1º Número: "))  //lê os números
const num2 = Number(prompt("2º número: "))  

const soma = num1 + num2                    //calcula a soma
console.log("A Soma é: " +soma)             //exibe o resultado

