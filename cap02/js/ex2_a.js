//vinculação do form e das respostas h2 e h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");

//cria um ouvinte e recebe os dados
frm.addEventListener("submit", (e) =>{
    const remedio = (frm.inRemedio.value);
    const preco = Number((frm.inPreco.value));
    
    // calcula o promoção e remove os decimais
    const promo = Math.floor(preco * 2); 
    
    // exibe as respostas
    resp1.innerText = ("Promoção de " +remedio);
    resp2.innerText = ("Leve 2 por apenas R$: " +promo.toFixed(2)+ " reais.");

    e.preventDefault();
})