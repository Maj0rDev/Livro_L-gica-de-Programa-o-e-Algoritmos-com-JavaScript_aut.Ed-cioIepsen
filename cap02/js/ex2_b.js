//fazer a integração do forms e do h3
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//criando um ouvinte e soletando os dados
frm.addEventListener("submit", (e) =>{
    const valor = Number((frm.inValor.value));
    const tempo = Number((frm.inTempo.value));

    //regras do negócio
    const total = Math.ceil(tempo / 15) * valor;
    
    //resposta do evento
    resp.innerText = ("O Valor a Pagar R$: " +total.toFixed(2)+ " reais");

    e.preventDefault();
})