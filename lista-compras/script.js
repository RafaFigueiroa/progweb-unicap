//armazena todos os inputs da pagina
const inputNomeItem = document.getElementById("inputNomeItem");
const inputQtd = document.getElementById("inputQtd");
const inputPreco = document.getElementById("inputPreco");   

//armazena os botoes e a tabela
const btAdicionar = document.getElementById("btAdicionar");
const btLimpar = document.getElementById("btLimpar");
const tabela = document.getElementById("table-body");

//matriz que armazena os objetos
let listaItens = [];


const redesenharTabela = (tabela, listaItens) =>{

    //pega os elementos <tr> (linhas da tabela)
    const linhas = document.getElementsByTagName("tr");

    
    for(let i = listaItens.length - 1; i > 0; i--){
        tabela.removeChild(linhas[i]); 
    }

    //reescreve a tabela por inteiro
    for(let i = 0; i < listaItens.length; i++){
        const nomeItemText = document.createTextNode(listaItens[i].nomeItem);
        const qtdText = document.createTextNode(listaItens[i].qtd);
        const precoText = document.createTextNode(listaItens[i].preco);

        const tdNomeItem = document.createElement("td");
        const tdQtd = document.createElement("td");
        const tdPreco = document.createElement("td");

        tdNomeItem.appendChild(nomeItemText);
        tdQtd.appendChild(qtdText);
        tdPreco.appendChild(precoText);

        const linhaItem = document.createElement("tr");

        linhaItem.appendChild(tdNomeItem);
        linhaItem.appendChild(tdQtd);
        linhaItem.appendChild(tdPreco);

        tabela.appendChild(linhaItem);
    }
};

//molde para criar uma nova linha de
function DescricaoItem(nomeItem, qtd, preco){
    this.nomeItem = nomeItem;
    this.qtd = qtd;
    this.preco = preco;
}


const handleBtAdicionarClick = () =>{
    //pega os textos dos inputs
    const nomeItem = inputNomeItem.value;
    const qtd = inputQtd.value;
    const preco = inputPreco.value;
    
    //verifica se algum dos inputs está vazio
    if(!nomeItem || !qtd || !preco){
        alert("Necessário preencher todos os campos!");
        return;
    }

    listaItens.push(new DescricaoItem(nomeItem, qtd, preco));

    //chama a função para reescrever a tabela
    redesenharTabela(tabela, listaItens);

    inputNomeItem.value = "";
    inputQtd.value = "";
    inputPreco.value = "";

    inputNomeItem.focus();
};

// limpa a tabela
const handleBtLimparClick = () =>{
    //pega os elementos <tr> (linhas da tabela)
    const linhas = document.getElementsByTagName("tr");

    
    for(let i = listaItens.length; i >= 0; i--){
        tabela.removeChild(linhas[i]); 
    }

    inputNomeItem.value = "";
    inputQtd.value = "";
    inputPreco.value = "";

    inputNomeItem.focus();
};

//linka as funções aos botões
btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;