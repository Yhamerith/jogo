let listaNumSorteado = [];
let numLimite = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;


function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function textoInicial(){
exibirTextoNaTela ('h1', 'Jogo do número secreto');
exibirTextoNaTela ('p', 'Escolha um número entre 1 a 10');
}

textoInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagensTentativas =`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagensTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);
    } else {
        if (chute > numSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else { 
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumAleatorio(){
    let numEscolhido = parseInt(Math.random() * numLimite + 1);
    let quantidadeDeElementosNaLista = listaNumSorteado.length;

    if(quantidadeDeElementosNaLista == numLimite){
        listaNumSorteado = [];
    }

    if(listaNumSorteado.includes(numEscolhido)){
        return gerarNumAleatorio();
    } else {
        listaNumSorteado.push(numEscolhido);
        console.log(listaNumSorteado);
        return numEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
}

// E X E R C Í C I O S



