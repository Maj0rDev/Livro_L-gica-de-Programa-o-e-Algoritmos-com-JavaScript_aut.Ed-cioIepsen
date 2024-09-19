const prompt = require("prompt-sync") ()
const salario = Number(prompt("Qual o seu salário?  "))
const tempo = Number(prompt("Quanto anos de serviço?  "))

const acrescimo = salario / 100
const quadri = Math.floor(tempo / 4)
const salarioF = salario + (quadri * acrescimo)

console.log("Você tem "+quadri+" quadriênios.")
console.log("O seu salário final é: R$"+salarioF.toFixed(3)+ ",00 reais")
