function novoDigito(tecla){
    telefone.value = telefone.value + tecla
}


const teclas = document.querySelectorAll('input[type=button]')
const telefone = document.querySelector('input[type=tel]')

for(x=0; x<teclas.length; x++){
    let valorTecla = teclas[x].value
    teclas[x].onclick = function() {
        novoDigito(valorTecla)
    }
    
}


