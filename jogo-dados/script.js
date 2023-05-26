const dado1 = document.getElementById("dado1");
const dado2 = document.getElementById("dado2");
const btDado1 = document.getElementById("btDado1");
const btDado2 = document.getElementById("btDado2");
const btReiniciar = document.getElementById("btReiniciar");
const rodada = document.getElementById("rodada");
const vencedorRodada =  document.getElementById("vencedorRodada");
const vencedor = document.getElementById("vencedor");

var numeroRodada = localStorage.getItem('rodada');   
rodada.innerHTML = numeroRodada;

var somaDados1 = Number(localStorage.getItem('somaDados1'));
var somaDados2 = Number(localStorage.getItem('somaDados2'));

dado1.innerHTML = localStorage.getItem('dado1');
dado2.innerHTML = localStorage.getItem('dado2');

vencedorRodada.innerHTML = localStorage.getItem('vencedorRodada');

if(localStorage.getItem('vencedor') == null){
    vencedor.innerHTML = "-"
}
else{
    vencedor.innerHTML = localStorage.getItem('vencedor');
    btDado1.disabled = true;
}

function fimDeJogo(somaDado1, somaDado2){
    if(somaDado1 > somaDado2){
        localStorage.setItem('vencedor', "O vencedor do jogo foi o dado 1!!")
        vencedor.innerHTML = localStorage.getItem('vencedor');
    }
    else if(somaDado2 > somaDado1){
        localStorage.setItem('vencedor', "O vencedor do jogo foi o dado 2!!")
        vencedor.innerHTML = localStorage.getItem('vencedor');
    }
    else{
        vencedor.innerHTML = "O jogo foi EMPATE!"
    }

    btDado1.disabled = true;
    btDado2.disabled = true;
} 

function rodadas(valorDado1, valorDado2){
    numeroRodada++;
    localStorage.setItem('rodada', numeroRodada);
    rodada.innerHTML = numeroRodada;
    console.log(numeroRodada);
    
    // identifica o vencedor da rodada
    if(valorDado1 > valorDado2){
        localStorage.setItem('vencedorRodada', `O vencedor da rodada ${numeroRodada} foi o dado 1`)
        vencedorRodada.innerHTML = localStorage.getItem('vencedorRodada');
    }
    else if(valorDado2 > valorDado1){
        localStorage.setItem('vencedorRodada', `O vencedor da rodada ${numeroRodada} foi o dado 2`)
        vencedorRodada.innerHTML = localStorage.getItem('vencedorRodada');
    }
    else{
        vencedorRodada.innerHTML = `A rodada ${numeroRodada} foi empate!`
    }

    //encerra o jogo
    if(numeroRodada == 10){
        fimDeJogo(somaDados1, somaDados2);
    }
};

var valorDado1;
const handleBtDado1Click = () => {
    valorDado1 = Math.floor(Math.random() * 6) + 1;
    
    localStorage.setItem('dado1', valorDado1);
    localStorage.setItem('somaDados1', somaDados1+=valorDado1);

    dado1.innerHTML = valorDado1;
  
    btDado1.disabled = true;
    btDado2.disabled = false;
};

const handleBtDado2Click = () => {
    const valorDado2 = Math.floor(Math.random() * 6) + 1;
  
    localStorage.setItem('dado2', valorDado2);
    localStorage.setItem('somaDados2', somaDados2+=valorDado2);

    dado2.innerHTML = valorDado2;
  
    btDado1.disabled = false;
    btDado2.disabled = true;

    rodadas(valorDado1, valorDado2);
};

const handleBtReiniciarClick = () => {  
    localStorage.clear();

    somaDados1 = 0;
    somaDados2 = 0;

    numeroRodada = 0;
    rodada.innerHTML = numeroRodada;

    vencedorRodada.innerHTML = "-";
    vencedor.innerHTML = "-";

    dado1.innerHTML = "-";
    dado2.innerHTML = "-";

    btDado1.disabled = false;
}

btDado1.onclick = handleBtDado1Click;
btDado2.onclick = handleBtDado2Click;
btReiniciar.onclick = handleBtReiniciarClick;