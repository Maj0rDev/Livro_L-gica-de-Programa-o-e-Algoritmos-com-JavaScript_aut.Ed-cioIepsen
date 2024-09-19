const prompt = require("prompt-sync")()
const pesoKg = Number(prompt("Quantos Kg de ração? "))
const consumo = Number(prompt("Quantas gramas come por dia? "))

const pesoG = pesoKg * 1000
const duracao = Math.floor(pesoG / consumo)
const sobra = pesoG - (duracao * consumo)


console.log("A ração irá durar "+duracao+" dias.")
console.log("Sobrando "+sobra+" gramas.")