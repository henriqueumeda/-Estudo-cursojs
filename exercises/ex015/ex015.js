function horaDia() {
    var agora = new Date()
    var hora = agora.getHours()
    var horaReportada = window.document.querySelector('div#mensagem')
    var foto = window.document.getElementById('imagem')
    
    horaReportada.innerHTML = `<p>Agora são ${hora} horas.</p>`
    
    if (hora >= 0 && hora < 12) {
        foto.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora <= 18) {
        foto.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        foto.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}