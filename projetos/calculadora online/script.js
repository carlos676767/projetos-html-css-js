function insert(num){
   let numero = document.getElementById('resultado').innerHTML
   document.getElementById('resultado').innerHTML = numero + num

}



function clean(){
    document.getElementById('resultado').innerHTML = ""
    
}


function back (){
    let resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1)

}


function calcular(){
    let resultado = document.getElementById('resultado').innerHTML
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado) // caso tiver algo faz o resultyado
    }else{
        document.getElementById('resultado').innerHTML = 'nada para somar!' // caso nao tiver mostra a mensagem.
    }
}