const inputNome = document.getElementById("inputNome");
const inputIdade = document.getElementById('inputIdade');
const btCalcular = document.getElementById('btCalcular');

const handleFocus = (evt) => {
    console.log(`focus no input ${evt.target.id}`);
};

const handleBlur = (evt) => {
    console.log(`perdeu o focus no input ${evt.target.id}`);
};

const handleBtCalcularClick = () => {
    console.log('clicou no botão calcular');
    const idade = inputIdade.value;
    const anoNasc = 2023 - idade;
    alert("vc nasceu no ano: " + anoNasc);
};

inputNome.onfocus = handleFocus;
inputIdade.onfocus = handleFocus;

inputNome.onblur = handleBlur;
inputIdade.onblur = handleBlur;

btCalcular.onclick = handleBtCalcularClick;