// impostare la variabile primoLancio con un numero casuale compreso tra 1 e 6
// impostare la variabile secondoLancio con un numero casuale compresa tra 1 e 6
// verificare se il primo lancio è un numero maggiore rispetto al secondo, in caso affermativo comunicare che ha vinto il primo
// altrimenti verificare se il secondo lancio è un numero maggiore rispetto al primo, in caso affermativo comunicare che ha vinto il secondo
// altrimenti comunicare che c'è una situazione di parità

var primoLancio = Math.round(Math.random()*6)+1;
document.getElementById('primo-lancio').innerHTML = 'il primo lancio è: ' + primoLancio;

var secondoLancio = Math.round(Math.random()*6)+1;
document.getElementById('secondo-lancio').innerHTML = 'il secondo lancio è: ' + secondoLancio;

if (primoLancio > secondoLancio) {
    document.getElementById('risultato').innerHTML = 'ha vinto il primo lancio';
} else if (secondoLancio > primoLancio) {
    document.getElementById('risultato').innerHTML = 'ha vinto il secondo lancio';
} else {
    document.getElementById('risultato').innerHTML = 'pari, refresha la pagina';
}
