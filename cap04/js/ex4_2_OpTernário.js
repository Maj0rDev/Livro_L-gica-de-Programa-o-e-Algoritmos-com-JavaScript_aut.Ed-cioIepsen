//Forma abreviada para criar as instruções IF...ELSE
//Realiza a atribuição de uma variável com base na análise de uma condição


   const categoria = idade >= 18 ? "Adulto" : "Juvenil" ;
//        variável |  condinção  | True  |  ou | False


//A instrução anterior equivale a seguinte estrutura:
let categoria
if(idade >= 18){
    categoria = "Adulto"
} else{
    categoria = "Juvenil"
}

