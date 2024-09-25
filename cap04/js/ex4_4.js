//vincula o elemento <form> e o <h2>
const frm = document.querySelector("form");
const resp = document.querySelector("h2");

//adiciona um ouvinte, coleta de dados e regra de negócio
frm.addEventListener("submit", (e) =>{
    const horaBr = Number((frm.horaBr.value));
    let horaFr = horaBr + 5;
    if(horaFr > 24){
       horaFr = horaFr - 24
       resp.innerText = ("O horário na França é: "+horaFr+" horas da manhã")
    } else{
    resp.innerText = ("O horário na França é: "+horaFr.toFixed(2)+" horas");
    }

e.preventDefault();
})
frm.addEventListener("reset", () =>{
    resp.innerText = ""
})