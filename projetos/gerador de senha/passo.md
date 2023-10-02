**Passo 1: Solicitar o Comprimento da Senha**

1.1. em seu html crie uma tag span com id span ou qualquer outro nome,
em seguida puxe o id usando `document.getElementById` com o comando value, 
em seguida crie uma variavel para amarzenar o valor obtido, como por ex `comprimentoSenha`


 `let usuario = document.getElementById("input").value //variavel que recebe um valor.`
` let armazenarSenha = usuario //armazena o valor da variavel usuario.`


1.2. Dica: Verifique se `comprimentoSenha` é um número válido e se atende aos requisitos (por exemplo, deve ser maior que zero), caso nao for aparecea a seguinte mensagem usando o id `tela`. 

`tela.innerHTML =` `digite um numero valido`


` if(armazenarSenha > 0)`

**Passo 2: Criar Conjuntos de Caracteres**

2.1. Crie quatro strings contendo caracteres: uma para letras maiúsculas, uma para letras minúsculas, uma para números e uma para caracteres especiais. Você pode definir essas strings manualmente.

`let maiúsculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";`

`let minúsculas = "abcdefghijklmnopqrstuvwxyz";`

`let numeros = "123456789";`

`let caracteres = "!@#$%^&*()_+[]{}|;:,.<>?";`



**Passo 3: Gerar Caracteres Aleatórios**

3.1. Crie uma função chamada `gerarCaractereAleatorio` que selecione aleatoriamente um conjunto de caracteres (maiúsculas, minúsculas, números ou caracteres especiais).

`function gerarCaractereAleatorio() {
    let array = [maiúsculas, minúsculas, numeros, caracteres];
    let geraraleatorio = array[Math.floor(Math.random() * array.length)];
    let gerar2 = geraraleatorio.charAt(Math.floor(Math.random() * geraraleatorio.length));
    return gerar2;
}
`
            
        

 

**Passo 4: Criar a Senha**

4.1. Inicialize uma variável, por exemplo, `senha`, como uma string vazia para armazenar a senha gerada.

`  let senha = ""`

4.2. Use um loop `for` ou `while` para gerar a senha. O loop deve continuar até que o comprimento da senha seja igual ao `comprimentoSenha` especificado pelo usuário.


4.3. Dentro do loop, chame a função `gerarCaractereAleatorio` para selecionar aleatoriamente um caractere de um dos conjuntos de caracteres (maiúsculas, minúsculas, números ou caracteres especiais) e adicione-o à variável `senha`.

 `while( senha.length < armazenarSenha){ //faz um loop while que verfifica se senha e menor que armazenar senha
            senha += gerarCaractereAleatorio() //nesse loop minha senha recebe a funcao criada acima.
        }`


**Passo 6: Exibir a Senha**

6.1. Exiba a senha gerada ao usuário, usando a a variavel `tela`.

  `tela.innerHTML =` `sua senha gerada e ${senha}`

