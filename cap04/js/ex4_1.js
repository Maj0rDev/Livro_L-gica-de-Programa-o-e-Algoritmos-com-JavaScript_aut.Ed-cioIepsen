//vinculação do form e das respostas h2 e h3
const frm = document.querySelector("form");
const resp1 = document.querySelector("h2");
const resp2 = document.querySelector("h3");

//cria o ouvinte e faz a captura dos dados
frm.addEventListener("submit", (e) => {
    const nome = (frm.inNome.value);
    const nota1 = Number((frm.Nota1.value));
    const nota2 = Number((frm.Nota2.value));

    //regra do negócio
    const media = (nota1 + nota2) / 2;
    if (media >= 7.0) {
       resp1.innerText = ("Parabéns "+nome+".  Você foi Aprovado!   Média: "+media);
    }
    else{
        resp2.innerText = ("Ops! "+nome+" Você foi Reprovado.  Média: "+media);
    }

e.preventDefault();
})

