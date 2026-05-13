function comprar(produto){
    alert(
        "Solicitação enviada!\n\n" +
        "Produto: " + produto +
        "\n\nNossa equipe entrará em contato."
    );
}

function contato(){
    alert(
        "Central Memorial Prime\n\n" +
        "Telefone: (62) 99999-0000\n" +
        "Atendimento 24 horas."
    );
}

function enviar(){
    alert(
        "Mensagem enviada com sucesso.\n\n" +
        "Retornaremos em breve."
    );
}

function scrollProdutos(){
    document.getElementById("produtos")
    .scrollIntoView({
        behavior:"smooth"
    });
}