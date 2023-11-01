function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] verifique os dados novamente')
    } else {
        var fsex = document.getElementsByName('readsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','bebe1.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','jovem1.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','adulto1.jpg')
            } else {
                //idoso
                img.setAttribute('src','idoso1.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','bebe2.jpg')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src','jovem2.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','adulto2.jpg')
            } else {
                //idoso
                img.setAttribute('src','idoso2.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}