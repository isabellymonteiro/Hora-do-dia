function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()

    var hora = 11 // data.getHours()
    if (hora < 10) {
        hora = '0' + hora
    }

    var minuto = data.getMinutes()
    if (minuto < 10) {
        minuto = '0' + minuto
    }

    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if (hora >= 0 && hora < 5) {
        // madrugada
        img.src = 'madrugada.png'
        document.body.style.background = '#0f4158'
    } else if (hora >= 5 && hora < 12) {
        // bom dia
        img.src = 'manha.png'
        document.body.style.background = '#d1ae89'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#717b67'
    } else {
        // boa noite
        img.src = 'noite.png'
        document.body.style.background = '#0a2427' 
    }
}
