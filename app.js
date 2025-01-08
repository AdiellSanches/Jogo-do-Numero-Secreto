//Definindo as variáveis
let listaDeNumerosSortedos = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

//Definindo as funções
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativas}.`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate : 1.2});
}

function gerarNumeroAleatorio(){
    let numeroEscolhindo = parseInt(Math.random() * numeroLimite) + 1;
    let quantidadeDeElementosNaLista = listaDeNumerosSortedos.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSortedos = [];
    }

    //Verificando se o número já foi sorteado
    if(listaDeNumerosSortedos.includes(numeroEscolhindo)){
        return gerarNumeroAleatorio();
    }else{
        //Adicionando o número sorteado na lista
        listaDeNumerosSortedos.push(numeroEscolhindo);
        console.log(listaDeNumerosSortedos);
        return numeroEscolhindo;
    }
}

function limparCampo(){
   chute = document.querySelector('input').value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}.`);
}

//Chamando as funções
exibirMensagemInicial();