let numero = document.getElementById('numero')
let tabela = document.getElementById('tabela')
let resultado = document.querySelector('div#resultado')
let valores = []

function adicionar() {
    let valorNumero = Number(numero.value)
        
    if (numero.value.length == 0 || valorNumero < 1 || valorNumero > 100 || valores.indexOf(valorNumero) != -1) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        resultado.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Valor ${valorNumero} adicionado.`
        item.value = valorNumero
        tabela.appendChild(item)
        valores.push(valorNumero)
    }

    numero.value = ''
    numero.focus()
}



function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let soma = 0
        let media = 0
        let maior = valores[0]
        let menor = valores[0]
        for (let contador in valores) {
            soma += valores[contador]
            if (valores[contador] > maior) {
                maior = valores[contador]
            } 
            if (valores[contador] < menor) {
                menor = valores[contador]
            }
        }
        media = soma/valores.length

        resultado.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.<br>`
        resultado.innerHTML += `O maior valor informado foi ${maior}.<br>`
        resultado.innerHTML += `O menor valor informado foi ${menor}.<br>`
        resultado.innerHTML += `Somando todos os valores, temos ${soma}.<br>`
        resultado.innerHTML += `A média dos valores digitados é ${media}.`
    }
}