//armazena todos os inputs da pagina
const inputNomeItem = document.getElementById("input-produto");
const inputQtd = document.getElementById("input-qtd");
const inputPreco = document.getElementById("input-preco");
const tipoQtd = document.getElementById("tipo-qtd");

//armazena os botoes e a tabela
const btAdicionar = document.getElementById("bt-adicionar");
const btLimpar = document.getElementById("bt-limpar");
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
        const qtdText = document.createTextNode(listaItens[i].qtd + " " + listaItens[i].tipo);
        const precoText = document.createTextNode("R$" + listaItens[i].preco);
        const valorText = document.createTextNode("R$" + listaItens[i].valor);

        const tdNomeItem = document.createElement("td");
        const tdQtd = document.createElement("td");
        const tdPreco = document.createElement("td");
        const tdValor = document.createElement("td");

        tdNomeItem.appendChild(nomeItemText);
        tdQtd.appendChild(qtdText);
        tdPreco.appendChild(precoText);
        tdValor.appendChild(valorText);

        const linhaItem = document.createElement("tr");

        linhaItem.appendChild(tdNomeItem);
        linhaItem.appendChild(tdQtd);
        linhaItem.appendChild(tdPreco);
        linhaItem.appendChild(tdValor);

        tabela.appendChild(linhaItem);
    }
};

//molde para criar uma nova linha de
function DescricaoItem(nomeItem, qtd, tipo, preco){
    this.nomeItem = nomeItem;
    this.qtd = qtd;
    this.tipo = tipo;
    this.preco = preco;
    this.valor = qtd * preco;
}


const handleBtAdicionarClick = () =>{
    //pega os textos dos inputs
    const nomeItem = inputNomeItem.value;
    const qtd = inputQtd.value;
    const preco = inputPreco.value;
    const tipo = tipoQtd.value;
    
    //verifica se algum dos inputs está vazio
    if(!nomeItem || !qtd || !preco){
        alert("Necessário preencher todos os campos!");
        return;
    }

    listaItens.push(new DescricaoItem(nomeItem, qtd, tipo, preco));

    //chama a função para reescrever a tabela
    redesenharTabela(tabela, listaItens);

    inputNomeItem.value = "";
    inputQtd.value = "";
    inputPreco.value = "";

    inputNomeItem.focus();
};

// limpa a tabela
const handleBtLimparClick = () =>{
    listaItens = []
    tabela.innerHTML = "";

    inputNomeItem.value = "";
    inputQtd.value = "";
    inputPreco.value = "";

    inputNomeItem.focus();
};

//linka as funções aos botões
btAdicionar.onclick = handleBtAdicionarClick;
btLimpar.onclick = handleBtLimparClick;