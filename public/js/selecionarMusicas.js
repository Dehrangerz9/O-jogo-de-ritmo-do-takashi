let indexAtivo = 0;
let discos = [];
let anteriorIndex = 0;

function init() {
    discos = document.getElementsByClassName("disco");
    anteriorIndex = discos.length - 1;
}

function proximoDiscoClick() {
    const proximoIndex = indexAtivo + 1 <= discos.length - 1 ? indexAtivo + 1 : 0;
    const depoisDoProximoIndex = proximoIndex + 1 <= discos.length - 1 ? proximoIndex + 1 : 0;
    anteriorIndex = indexAtivo - 1 >= 0 ? indexAtivo - 1 : discos.length - 1 
    const discoAtivo = discos[indexAtivo]
    const proximoDisco = discos[proximoIndex]
    const discoAnterior = discos[anteriorIndex]
    const discoDepoisDoProximo = discos[depoisDoProximoIndex]
    discoAnterior.dataset.status = "inativo"
    discoAtivo.dataset.status = "anterior"
    moverBracoTocaDisco()
    discoDepoisDoProximo.dataset.status = "depois-do-proximo"
    proximoDisco.dataset.status = "ativo"
    setTimeout(()=>{
        discoDepoisDoProximo.dataset.status = "proximo"
    },50)
        indexAtivo = proximoIndex;
}

function anteriorDiscoClick() {
    anteriorIndex = indexAtivo - 1 >= 0 ? indexAtivo - 1  : discos.length - 1;
    const depoisDoAnteriorIndex = anteriorIndex - 1 >= 0 ? anteriorIndex - 1  : discos.length - 1;
    const proximoIndex = indexAtivo + 1 <= discos.length - 1 ? indexAtivo + 1 : 0;
    const discoAtivo = discos[indexAtivo]
    const proximoDisco = discos[proximoIndex]
    const discoAnterior = discos[anteriorIndex]
    const discoDepoisDoAnterior = discos[depoisDoAnteriorIndex]
    discoAnterior.dataset.status = "ativo"
    discoAtivo.dataset.status = "proximo"
    moverBracoTocaDisco()
    discoDepoisDoAnterior.dataset.status = "depois-do-anterior"
    proximoDisco.dataset.status = "inativo"
    setTimeout(()=>{
        discoDepoisDoAnterior.dataset.status = "anterior"
    },50)
        indexAtivo = anteriorIndex;
}

function moverBracoTocaDisco(){
    const braco = document.querySelector('.toca-disco-braco')
    braco.style.transform = "rotate(-25deg)"
    braco.style.left = "78%"
    setTimeout(()=>{
        braco.style.transform = "rotate(0deg)"
        braco.style.left = "69%"
    },500)
}



// Inicializa os discos
init();
