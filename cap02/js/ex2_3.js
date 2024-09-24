//Criando referência ao <form> aos elementos de resposta
const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

//Criando um ouvinte do evento, acionado com o botão submit 
frm.addEventListener("submit", (e) => {
    const carro = frm.veiculo.value;
    const preco = Number(frm.valor.value);

//Calculando os valores da regra de negócio
    const entrada = preco * (1/2);
    const parcela = (preco * 1/2)/12;

//Variávei par a exibir a resposta
    resp1.innerText = ("Promoção do " +carro);
    resp2.innerText = ("Entrada de R$ " +entrada.toFixed(2));
    resp3.innerText = ("+12x de R$ " +parcela.toFixed(2));
    
    e.preventDefault()
})