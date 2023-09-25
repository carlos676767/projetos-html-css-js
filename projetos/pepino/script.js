var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var span = document.querySelector("span")



function somar(){
    span.innerHTML = parseInt (n1.value) + parseInt (n2.value)
}

function subtrair(){
    span.innerHTML = parseInt (n1.value) - parseInt (n2.value)
}


function multiplicar(){
    span.innerHTML = parseInt (n1.value) * parseInt (n2.value)
}


function divisao(){
    span.innerHTML = parseInt (n1.value) / parseInt (n2.value)
}



