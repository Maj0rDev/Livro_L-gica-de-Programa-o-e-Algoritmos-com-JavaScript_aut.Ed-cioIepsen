const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    //obtém os dados dos campos
    const titulo = frm.Titulo.value;               
    const duracao = Number(frm.Duracao.value);

    //Verifica a integridade do dado digitado
    if(isNaN(duracao)){
        resp1.innerText = "Por favor, insira um valor válido";
        resp2.innerText = "";
        e.preventDefault();
    }

    const horas = Math.floor(duracao / 60)          //arredonda o resultado para baixo 
    const minutos = duracao % 60                    //obtém o resto da divisão

    resp1.innerText = ("O título do filme é:  " +titulo)
    resp2.innerText = ("A duração foi:  " +horas+ " horas e "+minutos+ " minutos.")

    e.preventDefault()
})