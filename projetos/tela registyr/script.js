function registro (){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if(email == "teste@gmail.com" && senha == "admin"){
        alert("conta criada com sucesso")
        location.a = "https://erikasarti.com/html/tabela-cores/"
    }else{
        alert("erro")
    }
}