
let tela = document.getElementById("tela"); //puxa o id tela para exibir o resultado
let botao = document.getElementById("botao"); //puxa o id botao
let usuario = document.getElementById("input").value; //cria uma variavel global input que recebe o valor.
let armazenarSenha = usuario; //cria uma variavel global que recebe o valor obtido do usuario


botao.addEventListener("click", function(){
    //cria um evento que executa as funcoes abaixo.
    //criando uma varivel que ira receber um valor e a outra ira guardar.
     usuario = document.getElementById("input").value; //variavel que recebe um valor.
     armazenarSenha = usuario; //armazena o valor da variavel usuario.

                                    //segundo passo.
    if(armazenarSenha > 0){ //verifica se senha e a variavel armazenar senha e maior que zero
        let maiúsculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //caso for recebe a var maiscula
        let minúsculas = "abcdefghijklmnopqrstuvwxyz"; //caso for recebe a var minusculas
        let numeros = "123456789"; //caso for recebe a var numeros
        let caractrezes = "!@#$%^&*()_+[]{}|;:,.<>?"; //caso for recebe a var  cara

                                                 //terceiro passo
        function gerarCaractereAleatorio(){ //gera uma funcao que faz gerar os caractrezes.
            let array = [maiúsculas, minúsculas, numeros, caractrezes]; //cria uma array que recebe as varievis acima.
            let geraraleatorio = array[Math.floor(Math.random()* array.length)]; //escolhe aleatoramente uma string
            let gerar2 = geraraleatorio.charAt(Math.floor(Math.random() * geraraleatorio.length)); //escolhe uma senha
            return gerar2; //pede para retornar o gerar2 que ali e aonde vai gerar as senhas.

            
        }                                 //quarto passo.
        let senha = "" //cria uma varivel com uma string vazia 
        while( senha.length < armazenarSenha){ //faz um loop while que verfifica se senha e menor que armazenar senha
            senha += gerarCaractereAleatorio(); //nesse loop minha senha recebe a funcao criada acima.
        }
        tela.style.color = "#4B0082";
        tela.innerHTML = `${senha}`; //mostra a senha ao usuario
    }else{
        tela.style.color = "#4B0082"
        tela.innerHTML = `Digite um numero valido`; //caso o armazenarsenha seja menor que zero aparece a mensagem pedindo ao usuario digitar um comprimento maior.
    }
})


                                                    //Gerar apenas numeros, terminar essa parte.
let numero = document.getElementById("numero")

function numeross() {
    if (numero.checked) { //verfica se o checkbox foi clicado
        input.style.display = "none"; //caso for o input some
        let numeros = "123456789"; //variavel que armazena os numeros
        let senhaGerada = ""; // aqui vai a senha gerada.

        function gerarNumeros() { //cra uma funcao
            for (let i = 0; i < numeros.length; i++) { //faz um loop que a cada numero passado gera um numero
                let numeroAleatorio = numeros.charAt(Math.floor(Math.random() * numeros.length)); //gerar os numeros 
                senhaGerada += numeroAleatorio; //adiciona a funcao a variavel senha 
            }
        }

        gerarNumeros(); // Chama a função para gerar a senha
        tela.style.color = "#4B0082"; //exibe de uma cor
        tela.innerHTML = senhaGerada; //mostra a senha.
    }
}

let cara = document.getElementById("caraca"); //cria uma variavel cara

function caractrezess(){ //cria uma funcao
    if(cara.checked){ //verifica se o checkbox foi clicado
        input.style.display = "none"; //oculta o input
        let caractrezess =  "!@#$%^&*()_+[]{}|;:,.<>?"; //cria uma variavel que armazena 
        let recebersenha =  ""; //cria uma string vazia.

        function gerarCaractereAleatorio(){ //cria uma funcao
            for(let i = 0; i < caractrezess.length; ++i){ //passa por cada caractreze 
                let recebercara = caractrezess.charAt(Math.floor(Math.random() * caractrezess.length)); //gera os caractrezes.
                recebersenha += recebercara; //recebe a senha na variavel receber senha
            }
        }
        gerarCaractereAleatorio() //chama a funcao
        tela.style.color = "#4B0082"; //coloca uma cor 
        tela.innerHTML = recebersenha; //exibe a senha.
    }
}


let minusculas = document.getElementById("minusculas") //cria uma variavel

function minusculass(){ //cria uma funcao
    if(minusculas.checked){ // faz uma verificao no checkbox
        input.style.display = "none"; //quando clicado no checkbox o input some
        let minusculas = "abcdefghijklmnopqrstuvwxyz"; //cria uma variavel que armazena as letras
        let gerarsenha = "" //cria uma string para armazenar a senha
        function gerarsenhasminusculas(){ //cria uma funcao
            for(let i = 0; i < minusculas.length; ++i){ //faz uma verificao que passa por cada string e gera uma senha com a variavel abaixo.
                let gerarsenhasMai = minusculas.charAt(Math.floor(Math.random()* minusculas.length)); //gera a senha.
                gerarsenha += gerarsenhasMai; //recebe a senha
            }
        }

        gerarsenhasminusculas() //chama a funcao
        tela.style.color = "#4B0082"; //coloca a saida de uma cor
        tela.innerHTML = gerarsenha; //exibe a senha 
    } 
}

let maiscula = document.getElementById("maisculas"); //cria uma variavel para ser checado o checkbox

function maisculass(){ //cria uma  funcao 
    if(maiscula.checked){ //faz uma verificao se o ckekbox esta clicado 
        input.style.display = "none"; //quando clicado o checkbox o input some.
        let maisculass = "ABCDEFGHlOZX"; //cria uma string que armazena as letras maisculas.
        let recebersenha = "" //cria uma variavel como string vazia 
        function gerarmaisculass(){ //cria uma funcao
            for(let i = 0; i < maisculass.length; ++i){ //passa por cada caractreze assim quando passar por cada gera uma senha com as funcoes abaixo.
                let gerarsenha = maisculass.charAt(Math.floor(Math.random() * maisculass.length));
                recebersenha += gerarsenha; //recebe a senha 
            }
        }
        gerarmaisculass() //chama a funcao
        tela.style.color = "#4B0082"; //ointa a saida de uma cor
        tela.innerHTML = recebersenha; //exibe a  senha
    }

}