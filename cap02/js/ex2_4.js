// Cria referência ao form e ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// Cria um ouvinte para o evento, acionado pelo botão submit. 
frm.addEventListener("submit", (e) => {
    // Impede o envio do formulário
    e.preventDefault();

    // Declara as variáveis para receber os dados do form
    const quilo = Number(frm.inQuilo.value);
    const consumo = Number(frm.inConsumo.value);

    // Faz as operações matemáticas com as variáveis
    const valor = (consumo / 1000) * quilo;

    // Atribui o resultado ao elemento h3
    resp.innerText = "Valor a pagar R$: " + valor.toFixed(2) + " reais";
});