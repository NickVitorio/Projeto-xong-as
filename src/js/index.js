const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagens')




botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log(indice)
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })

})


function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}





const botoesArtistas = document.querySelectorAll(".artista")

const personagensDeFundo = document.querySelectorAll(".personagens")




botoesArtistas.forEach((pessoa, i) => {
    pessoa.addEventListener('mouseover', () => {
        console.log("passou no " + i)

        const personagemVisivel = document.querySelector(".ativo")

        personagemVisivel.classList.remove('ativo')

        personagensDeFundo[i].classList.add('ativo')

    })
})



const botaoIntegrantes = document.getElementById("btn-integrantes")

const modal = document.getElementById("integrantes")

const fecharModal = document.getElementById(
    "seta"
)



botaoIntegrantes.onclick = function () {
    modal.show()

}

fecharModal.onclick = function () {
    modal.close()
}




