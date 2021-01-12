function tabuada() {
    let numero = document.getElementById('numero')
    let tabuada = document.querySelector('div#resultado')
    let valorNumero = Number(numero.value)

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!') 
        tabuada.innerHTML = 'Digite um número acima'
    } else {
        tabuada.innerHTML = ''
        for (let contador = 1; contador <= 10; contador++) {
            let valorResultado = Number(contador) * valorNumero
            tabuada.innerHTML += `${valorNumero}x${contador}=${valorResultado}<br/>`
        }
    }
}