const prompt = require("prompt-sync")()     //adiciona o pacote 'prompt-sync'
const valor = Number(prompt("Valor da compra R$: "))    //lê valor da compra
const aux = Math.floor(valor / 20)          //aux = n° de parcelas sem condições

//operador ternário
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux       
//   variável | if        | else if     |false 
//   
//   Equivale a:
//   let parcelas
//   if (aux == 0){
//  parcelas = 1
//  } else if (aux > 6){
//  parcelas = 6
//  } else {
//  parcelas = aux
//  }

const valorParcela = valor / parcelas        //cálculo do valor da parcela
console.log("Pode pagar em "+parcelas+"x de R$: "+valorParcela.toFixed(2))
