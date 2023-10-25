function somar() {
    var tn1 = document.getElementById('txtn1') //chamando o input1
    var tn2 = document.getElementById('txtn2')//chamando o input2
    var res = document.getElementById('res') //chamando o resultado
    var n1 = Number(tn1.value) //armazenando o numero e fazendo tratamento nele
    var n2 = Number(tn2.value) //armazenando o numero e fazendo tratamento nele
    var s = n1 + n2 
    res.innerHTML = `A soma entre ${n1} e ${n2} é: ${s}` //mostrando o resultado
}