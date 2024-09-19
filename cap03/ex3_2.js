const prompt = require("prompt-sync")() //adiciona o pacote ao programa
const veiculo = prompt("Veículo: ")     //lê os dados de entrada
const preco = Number(prompt("Preço R$: "))

const entrada = preco * 0.50            //calcula as entradas. Regras do negócio
const parcela = (preco * 0.50) / 12

console.log("Promoção: " +veiculo)      //exibe as respostas
console.log("Entrada de R$: "+entrada.toFixed(3))
console.log("+12x de R$ "+parcela.toFixed(3))