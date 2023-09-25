function registro(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
        if(username == "user1" && password == "123456"){
            alert("usuario logado com sucesso");
            location.href = 'home.html'
        }else{
            alert("dados incorretos");
        }
    

}



