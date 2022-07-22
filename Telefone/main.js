
const teclas = document.querySelectorAll('input[type=button]')
const telefone = document.querySelector('input[type=tel]')

for(x=0; x<teclas.length; x++){
    
    let teclaAtual = teclas[x]

    let valorTecla = teclaAtual.value


    teclaAtual.onclick = function() {
        telefone.value = telefone.value + valorTecla

    }

    teclaAtual.onkeydown = function (tecla) {
        if (tecla.code === "Enter" || tecla.code === "Space" ){
            teclaAtual.classList.add('ativa')
        }
    }

    teclaAtual.onkeyup = function () {
        teclaAtual.classList.remove('ativa')
    }
    
}


