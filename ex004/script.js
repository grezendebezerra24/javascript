var nome = window.prompt('Qual é seu nome? ')
var salario = parseFloat(window.prompt('Qual o seu salario'))

document.write(`Ola ${nome}!estela seu nome tem ${nome.length} letras.<br>`)
document.write(`Seu nome em maiusculo é ${nome.toUpperCase()} <br/>`)
document.write(`Seu nome em minusculoe é: ${nome.toLowerCase()}`)
document.write(`Seu salario é: ${salario.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'} )}`)