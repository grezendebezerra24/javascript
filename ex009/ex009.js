var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)
switch(diaSem) {
    case 0 :
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('quarta-feira')
        break
    case 4:
        console.log('QUinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERROR] DIA INVALIDO')
        break
}   