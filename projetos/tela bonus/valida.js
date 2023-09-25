function login(){
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if(email == "carlos12@gmail.com" && senha == "admin"){
        alert("logado com sucesso")
        location.href = "home.html"
    }else{
        alert("usuario nao encontrado")
    }
}
