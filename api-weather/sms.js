const accountSid = 'AC1896b79cafecdfdbd2bac48f5557314c';
const authToken = '928c50fc64619d1f769785adec0e6115';
const client = require('twilio')(accountSid, authToken);

const btEnviar = document.getElementById("btEnviar");

const sendSms = () => {
    client.messages
        .create({
            body: 'oi teste teste á!',
            from: '+16205368972',
            to: '+5581992682273'
        })
        .then(message => console.log(message.sid))
        .done();
}

btEnviar.onclick = sendSms;