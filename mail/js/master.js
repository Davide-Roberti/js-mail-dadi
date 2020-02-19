//creare un array con una lista di mail
// chiedere all'utente la sua Mail
//verificare se la mail corrisponde a uno dei campi dell'array
//se vorrisponde comunico all'utente che può accedere
//se non corrisponde comunico all'utente che non può accedere

var indirizzoMail = ['paolino@mail.com', 'pancrazio@mail.it', 'sigismondo@mail.com', 'lucrezio@mail.it'];
console.log(indirizzoMail);

var mailUtente = prompt('inserisci il tuo indirizzo mail');

var accesso = 'non consentito';

for (var i = 0; i < indirizzoMail.length; i++) {
    if (mailUtente == indirizzoMail[i]) {
        var accesso = 'consentito';
    }
}

if (accesso == 'consentito') {
    document.getElementById('conferma-accesso').innerHTML = 'puoi accedere';
} else {
    document.getElementById('conferma-accesso').innerHTML = 'non puoi accedere';
}
