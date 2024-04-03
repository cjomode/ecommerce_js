var imagem1 = true;

function mudarTema() {
    var element = document.body;
    var image = document.getElementById('tema');
    
    element.classList.toggle("dark-mode");
    
    if (imagem1) {
        image.src = "images/brilho-do-sol.png";
    } else {
        image.src = "images/lua.png";
    }

    var imagem = document.getElementById('coracao_menu');

    if(imagem1){
        imagem.src = "images/coracao (1).png";
    }else{
        imagem.src = "images/coracao.png"
    }

    var imagem = document.getElementById('compras_menu');

    if(imagem1){
        imagem.src = "images/vista-lateral-vazia-do-carrinho-de-compras (1).png";
    }else{
        imagem.src = "images/vista-lateral-vazia-do-carrinho-de-compras.png"
    }

    var imagem = document.getElementById('perfil_menu');

    if(imagem1){
        imagem.src = "images/perfil-de-usuario (1).png";
    }else{
        imagem.src = "images/perfil-de-usuario.png"
    }
    imagem1 = !imagem1;

}

// botão_like

function trocaImagem(id) {
    var image = document.getElementById(id);

    if (image.src.includes("images/heart_2107774.png")) {
        image.src = "images/heart_2107952.png";
    } else {
        image.src = "images/heart_2107774.png";
    }
}
