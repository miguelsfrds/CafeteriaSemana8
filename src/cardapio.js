let itensCardapio = [];
let handleSubmit = (event) => {
    event.preventDefault(); // Impede o envio do formulário e o recarregamento da página
    // Item
    let itemInput = document.getElementById("item");
    let item = itemInput.value; //guardando o valor do itemInput
    // preco
    let precoInput = document.getElementById("preco");
    let preco = precoInput.value; //guardando o valor do precoInput
    // descricao
    let descricaoInput = document.getElementById("descricao");
    let descricao = descricaoInput.value; //guardando o valor do descricaoInput

    // Adicionando os valores dos inputs como um objeto dentro do array itensCardapio
    itensCardapio.push({
        item: item,
        preco: preco,
        descricao: descricao
    });

    // Salvando o array itensCardapio no Local Storage como uma string JSON
    localStorage.setItem("itens", JSON.stringify(itensCardapio));

    console.log(itensCardapio); // // mostrando no console a lista completa de itens armazenados até agora
    
    // Notificação que os dados foram enviados
    Toastify({
        text: "Dados Enviados",
        duration: 2000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
};

let formulario = document.getElementById("formCardapio");
formulario.onsubmit = handleSubmit;