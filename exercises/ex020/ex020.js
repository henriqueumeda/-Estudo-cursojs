function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let contagem = document.querySelector('div#resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        contagem.innerHTML = `Impossível contar!`
    } else {
        contagem.innerHTML = 'Contando:<br/>'
        let valorInicio = Number(inicio.value)
        let valorFim = Number(fim.value)
        let valorPasso = Number(passo.value)

        if (valorPasso <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            valorPasso = 1
        }

        if (valorInicio < valorFim) {
            for (let contador = valorInicio; contador <= valorFim; contador += valorPasso) {
                contagem.innerHTML += `${contador} \u{1F449} `
            }
    
            contagem.innerHTML += `\u{1F3C1}`
        } else {
            for (let contador = valorInicio; contador >= valorFim; contador -= valorPasso) {
                contagem.innerHTML += `${contador} \u{1F449} `
            }

            contagem.innerHTML += `\u{1F3C1}`
        }

    }    
}