const qualPlaca = document.querySelector('#qual-placa')
const submit = document.querySelector('#submit')
const estado = document.querySelector('#estado')
const codigo = document.querySelector('#codigo')


let placa;

submit.addEventListener('click', (e) => {
    e.preventDefault()
    
    placa = qualPlaca.value
    placa = placa.toUpperCase()
    primeirasLetras = placa.slice(0,3)

    verificaEstado(primeirasLetras)
    colocaNaPlaca(placa)
})


function colocaNaPlaca(placa) {
    let placaSeparada='';
    for (let l of placa) {
        placaSeparada += l + ' '
    }

    placaSeparada = placaSeparada.trimEnd(' ')
    
    codigo.innerHTML = ''
    codigo.innerHTML = placaSeparada
    
}


function verificaEstado(primeirasLetras) {
    
    if (primeirasLetras >= 'MZN' && primeirasLetras <= 'NAG') {
        estado.innerHTML = ''
        estado.innerHTML = 'Acre'
    } else if (primeirasLetras >= 'NXR' && primeirasLetras <= 'NXT') {
        estado.innerHTML = ''
        estado.innerHTML = 'Acre'
    } else if (primeirasLetras == 'OVG') {
        estado.innerHTML = ''
        estado.innerHTML = 'Acre'
    } else if (primeirasLetras == 'OXP') {
        estado.innerHTML = ''
        estado.innerHTML = 'Acre'
    } else if (primeirasLetras >= 'QLU' && primeirasLetras <= 'QLZ') {
        estado.innerHTML = ''
        estado.innerHTML = 'Acre'
    } else if (primeirasLetras >= 'QWN' && primeirasLetras <= 'QWQ') {
        estado.innerHTML = ''
        estado.innerHTML = 'Acre'
    }
    
    else if (primeirasLetras >= 'JWF' && primeirasLetras <= 'JXY') {
        estado.innerHTML = ''
        estado.innerHTML = 'Amazonas'
    } else if (primeirasLetras >= 'NOI' && primeirasLetras <= 'NPB') {
        estado.innerHTML = ''
        estado.innerHTML = 'Amazonas'
    } else if (primeirasLetras >= 'OAA' && primeirasLetras <= 'OAO') {
        estado.innerHTML = ''
        estado.innerHTML = 'Amazonas'
    } else if (primeirasLetras == 'OXM') {
        estado.innerHTML = ''
        estado.innerHTML = 'Amazonas'
    } else if (primeirasLetras >= 'PHA' && primeirasLetras <= 'PHZ') {
        estado.innerHTML = ''
        estado.innerHTML = 'Amazonas'
    } else if (primeirasLetras >= 'QZA' && primeirasLetras <= 'QZZ') {
        estado.innerHTML = ''
        estado.innerHTML = 'Amazonas'
    }
    
    else if (primeirasLetras >= 'NBB' && primeirasLetras <= 'NEH') {
        estado.innerHTML = ''
        estado.innerHTML = 'Rondônia'
    } else if (primeirasLetras >= 'OHL' && primeirasLetras <= 'OHW') {
        estado.innerHTML = ''
        estado.innerHTML = 'Rondônia'
    } else if (primeirasLetras == 'OXL') {
        estado.innerHTML = ''
        estado.innerHTML = 'Rondônia'
    } else if (primeirasLetras == 'QRA') {
        estado.innerHTML = ''
        estado.innerHTML = 'Rondônia'
    } else if (primeirasLetras >= 'QTA' && primeirasLetras <= 'QTJ') {
        estado.innerHTML = ''
        estado.innerHTML = 'Rondônia'
    } else if (primeirasLetras >= 'RSU' && primeirasLetras <= 'RSZ') {
        estado.innerHTML = ''
        estado.innerHTML = 'Rondônia'
    } else {
        estado.innerHTML = ''
        estado.innerHTML = 'Não encontrado'
    }
}






