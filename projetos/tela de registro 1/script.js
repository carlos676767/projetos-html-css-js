function login(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email === "admin" && senha === "admin"){
        alert("usuario logado com sucesso!");

        location.href = "home.html"
    }else{
        alert("usuario nao encontrado");
    }
}
