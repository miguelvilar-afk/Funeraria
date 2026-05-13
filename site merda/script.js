function ligar(){
    alert("Ligando para a funerária...");
}

let botoes = document.querySelectorAll(".card button");

for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener("click", function(){
        alert("Produto adicionado no carrinho funerário!");
    });
}