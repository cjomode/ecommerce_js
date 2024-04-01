// alert("Seja Bem Vindo!!!");

// function trocaImagem(){
//     var image = document.getElementById('heart');

//     if (image.src.match("images/heart_2107952.png")) {
//         image.src = "images/heart_2107774.png";
//     } else {
//         image.src = "images/heart_2107774.png";
//     }
// }

var imagem1 = true;

function trocaImagem() {
    var image = document.getElementById('like1');

    if (imagem1) {
        image.src = "images/heart_2107952.png";
    } else {
        image.src = "images/heart_2107774.png";
    }

    imagem1 = !imagem1;
}

var imagem2 = true;

function trocaImagem2() {
    var image = document.getElementById('like2');

    if (imagem2) {
        image.src = "images/heart_2107952.png";
    } else {
        image.src = "images/heart_2107774.png";
    }

    imagem2 = !imagem2;
}



