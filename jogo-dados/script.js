const dado1 = document.getElementById("dado1");
const dado2 = document.getElementById("dado2");

const btDado1 = document.getElementById("btDado1");
const btDado2 = document.getElementById("btDado2");

const btReiniciar = document.getElementById("btReiniciar");

const rodada = document.getElementById("rodada");
var numeroRodada = 0;

const vencedorRodada =  document.getElementById("vencedorRodada");
var somaDado1 = 0;
var somaDado2 = 0;

const vencedor = document.getElementById("vencedor");

function fimDeJogo(somaDado1, somaDado2){
    if(somaDado1 > somaDado2){
        vencedor.innerHTML = "O vencedor do jogo foi o dado 1!!";
    }
    else if(somaDado2 > somaDado1){
        vencedor.innerHTML = "O vencedor do jogo foi o dado 2!!";
    }
    else{
        vencedor.innerHTML = "O jogo foi EMPATE!"
    }

    btDado1.disabled = true;
    btDado2.disabled = true;
} 

function rodadas(valorDado1, valorDado2){
    numeroRodada++;
    rodada.innerHTML = numeroRodada;
    
    // identifica o vencedor da rodada
    if(valorDado1 > valorDado2){
        vencedorRodada.innerHTML = `O vencedor da rodada ${numeroRodada} é o dado 1`
    }
    else if(valorDado2 > valorDado1){
        vencedorRodada.innerHTML = `O vencedor da rodada ${numeroRodada} é o dado 2`
    }
    else{
        vencedorRodada.innerHTML = `A rodada ${numeroRodada} foi empate!`
    }

    // guarda os valores dos dados de cada rodada
    if(numeroRodada < 10){
        somaDado1 += valorDado1;
        somaDado2 += valorDado2;
    }
    // encerra
    else if(numeroRodada => 10){
        fimDeJogo(somaDado1, somaDado2);
    }
};


var valorDado1;
const handleBtDado1Click = () => {
    valorDado1 = Math.floor(Math.random() * 6) + 1;

    dado1.innerHTML = valorDado1;
  
    btDado1.disabled = true;
    btDado2.disabled = false;
};

const handleBtDado2Click = () => {
    const valorDado2 = Math.floor(Math.random() * 6) + 1;
  
    dado2.innerHTML = valorDado2;
  
    btDado1.disabled = false;
    btDado2.disabled = true;

    rodadas(valorDado1, valorDado2);
};

const handleBtReiniciarClick = () => {  
    somaDado1 = 0;
    somaDado2 = 0;

    vencedorRodada.innerHTML = "";

    numeroRodada = 0;
    rodada.innerHTML = numeroRodada;

    vencedor.innerHTML = "";

    dado1.innerHTML = "-";
    dado2.innerHTML = "-";

    btDado1.disabled = false;
}

btDado1.onclick = handleBtDado1Click;
btDado2.onclick = handleBtDado2Click;
btReiniciar.onclick = handleBtReiniciarClick;