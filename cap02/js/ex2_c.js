//cria referência ao form e às respostas h2 e h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");

//criar um ouvinte e soletar os dados
frm.addEventListener("submit", (e) =>{
    const produto = (frm.inProduto.value);
    const preco = Number((frm.inPreco.value));
    
    //regras do negócio
    const promoP = preco / 2;
    const promoF = (preco * 2) + promoP;

    //respostas
    resp1.innerText = ( produto+ " - Promoção: Leve 3 por R$: " +promoF+ " reais");
    resp2.innerText = ("O 3º produto custará apenas R$: " +promoP+ " reais.");

    e.preventDefault()
})