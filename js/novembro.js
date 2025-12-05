// Criar a lista de imagens
let imagens = [
    'img/NOVEMBRO AZUL (1).svg',
    'img/NOVEMBRO (1).svg',
    'img/NOVEMBRO AZUL.svg'
]

let = IndiceAtualListaImagens = 0

function exibirImagem() {
    let imagemCarrossel = document.getElementById('img-carrossel')
    imagemCarrossel.src = imagens[IndiceAtualListaImagens]
}

// Lógica para exibir imagens a
// Cada 5 segundos
setInterval(function() {
    exibirImagem()
    IndiceAtualListaImagens++

    // 
    //
    if (IndiceAtualListaImagens > 2){
        IndiceAtualListaImagens = 0
    }


}, 5000);

exibirImagem()
IndiceAtualListaImagens++