const list = document.getElementById("list");
const btPrevious = document.getElementById("btPrevious");
const btNext = document.getElementById("btNext");
const pagina = document.getElementById("pagina");

var dados = {};

const renderizaLista = (pessoas) => {
    list.innerHTML = "";
    
    pessoas.forEach(pessoa => {
        const itemText = document.createTextNode(`${pessoa.name} (${pessoa.birth_year})`);
        const listItem = document.createElement("li");
        listItem.appendChild(itemText);
        list.appendChild(listItem);
    });
};

const getPessoas = (url) => {
    console.log("antes do fetch")
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            dados = data;
            console.log(dados);

            btPrevious.disabled = !dados.previous;
            btNext.disabled = !dados.next;

            renderizaLista(data.results)
        });
    console.log("após o fetch")
};

const handleBtPrevious = () => {
    getPessoas(dados.previous);
};

const handleBtNext = () => {
    getPessoas(dados.next);
}

getPessoas("https://swapi.dev/api/people");

btPrevious.onclick = handleBtPrevious;
btNext.onclick = handleBtNext;