function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('ano')
    var resultado = document.querySelector('div#resultado')

    if (formularioAno.value.length == 0 || formularioAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                imagem.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade <50) {
                imagem.setAttribute('src', 'foto-adulto-m.png')
            } else {
                imagem.setAttribute('src', 'foto-idoso-m.png')
            }
        } else {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                imagem.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                imagem.setAttribute('src', 'foto-adulto-f.png')
            } else {
                imagem.setAttribute('src', 'foto-idoso-f.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(imagem)
    }
}