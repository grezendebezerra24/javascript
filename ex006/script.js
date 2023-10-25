var a = document.getElementById('area') //criando a variavel a
a.addEventListener('click' , clicar)//definindo os eventos da var
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout' , saiu)

function clicar(){ // evento de clicar
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}

function entrar(){ //evento de passar o mouse encima
    a.innerText = 'Entrou'
    a.style.background = 'yellow'
    a.style.color = 'black'
}

function saiu(){//evemto de quando o mouse sai da area
    a.innerText ='Saiu'
    a.style.background = 'blue'
}