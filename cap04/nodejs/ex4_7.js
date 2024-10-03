const prompt = require("prompt-sync") ()
const pessoas = Number(prompt("Nº de Pessoas: "))
const peixes = Number(prompt("Nº de Peixes: "))

let pagar

if (peixes <= pessoas){             //condição do IF
    pagar = pessoas * 20            //comando do IF
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}
console.log("Pagar R$: " +pagar.toFixed(2))