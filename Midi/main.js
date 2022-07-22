function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
    else{
        alert('Elemento não encontrado ou seletor inválido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (x = 0; x < listaDeTeclas.length; x++) {

    const teclaAtual = listaDeTeclas[x]
    const classTecla = listaDeTeclas[x].classList[1]
    const somAtual = `#som_${classTecla}`

    teclaAtual.onclick = function () {
        tocaSom(somAtual)
    }

    teclaAtual.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            teclaAtual.classList.add('ativa')
        }
    }

    teclaAtual.onkeyup = function () {
        teclaAtual.classList.remove('ativa')
    }

}