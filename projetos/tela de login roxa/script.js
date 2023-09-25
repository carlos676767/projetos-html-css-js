function logar(){
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    if(email == 'teste@gmail.com' && senha == 'admin'){
        alert("logado com sucesso!");
        location = "home.html"
    }else{
         alert("usuario nao encontrado em nosso banco de dados!");
    }
}
    


