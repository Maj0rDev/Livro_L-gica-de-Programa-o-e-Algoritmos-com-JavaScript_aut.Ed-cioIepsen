const prompt = require("prompt-sync")()
const numero = Number(prompt("Número (centena): "))    //lê o número
if (numero < 100 || numero >= 1000){
    console.log("Erro. Deve ser uma centena.")
    return
}

const num1 = Math.floor(numero / 100)       //obtém 1º numero (centena)
const sobra = numero % 100                  //o que sobra (dezena)
const num2 = Math.floor(sobra / 10 )        //obtém o 2º número
const num3 = sobra % 10                     //obtém o 3º número 

console.log("A centena invertida é: " +num3+num2+num1)

