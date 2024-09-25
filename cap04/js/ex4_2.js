//criando referência ao <form> e ao <h3>
const frm = document.querySelector("form");
const resp = document.querySelector("h2");

//cria um ouvinte e faz a coleta de dados
frm.addEventListener("submit", (e) => {
    e.preventDefault ();                    //evita o envio do form

    const nome = (frm.inNome.value);
    const masculino = (frm.inMasculino.checked); // coleta de dados do checkbox
    const altura = Number((frm.inAltura.value));

    //regra de negócio
    let peso

    if (masculino){
        peso = 22 * Math.pow(altura, 2);
    } else{
        peso = 21 * Math.pow(altura, 2);
    }

    resp.innerText = ("Olá, "+nome+". Seu peso ideal é: "+peso.toFixed(3));

    //para realizar o 'reset' da resposta exibida no <h3>
frm.addEventListener("reset", () => {
    resp.innerText = ""
})

    
})