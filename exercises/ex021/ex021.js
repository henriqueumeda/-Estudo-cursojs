function tabuada() {
    let numero = document.getElementById('numero')
    let tabuada = document.querySelector('div#resultado')
    let valorNumero = Number(numero)

    for (let contador = 1; contador <= 10; contador++) {
        let valorResultado = contador * valorNumero
        tabuada.innerHTML = `${valorNumero}x${contador}=${valorResultado}<br/>`
    }
}