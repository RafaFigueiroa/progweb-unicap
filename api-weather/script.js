const btEnviar = document.getElementById("btEnviar");
const inputCidade = document.getElementById("inputCidade");
const p = document.getElementById("p");
const list = document.getElementById("list");

var dados = {};

const apiKey = "2ad4c570a693b319882e6d97c42b1bf1";

const getWeatherData = async(city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherUrl);
    const data = await res.json();
    dados = data;

    console.log(dados);

    showWeatherData(dados);
}

const showWeatherData = (dados) => {
    p.innerHTML = dados.coord['lat'] + " " + dados.coord['lon'];
    const obj = Object.entries(dados.main);

    for(i = 0; i < obj.length; i++){
        const itemText = document.createTextNode(`${obj[i][0]}: ${obj[i][1]}`);
        const item = document.createElement("li");

        item.appendChild(itemText);
        list.appendChild(item);
    }
}

const handleBtEnviar = () => {
    const city = inputCidade.value;
    getWeatherData(city);
}

btEnviar.onclick = handleBtEnviar;
//getAPI("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=2ad4c570a693b319882e6d97c42b1bf1");