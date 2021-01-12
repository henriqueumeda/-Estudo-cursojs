function tabuada() {
    let numero = document.getElementById('numero')
    let tabuada = document.getElementById('seltab')
    let valorNumero = Number(numero.value)

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número!') 
    } else {
        tabuada.innerHTML = ''
        for (let contador = 1; contador <= 10; contador++) {
            let valorResultado = Number(contador) * valorNumero
            let item = document.createElement('option')
            item.text = `${valorNumero}x${contador}=${valorResultado}`
            item.value = `tab${contador}`
            tabuada.appendChild(item)
        }
    }
}