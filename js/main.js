// // Il computer deve generare 16 numeri casuali tra 1 e 100.
// // In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti
//  si continua chiedendo all’utente un altro numero.
// // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero
// massimo possibile di numeri consentiti.
// // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte
// che l’utente ha inserito un numero consentito.
var mine = [];

var i = 0;
while (i < 16) {
    var numeriCasuali = generaRandom(1,100);
    mine.push(numeriCasuali);
    i++;
}
function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
console.log(mine);
// fino a qua ho generato 16 numeri random, le mine.

var richiestaNumero = parseInt(prompt('inserisci un numero da 1 a 100'));

function livelloSecondo(prompt){
    for (var i = 0; i < 84; i++) {
        var livelloDue = richiestaNumero[i];
    }
    return livelloDue;
}
function livelloTerzo(prompt){
    for (var i = 0; i < 50; i++) {
        var livelloTre = richiestaNumero[i];
    }
    return livelloTre;
}

var verificaNumero = false;

if (!isNaN(richiestaNumero) && richiestaNumero <= 100 && richiestaNumero >= 1) {
    var verificaNumero = true;
}
if (verificaNumero){
    while (!mine.includes(richiestaNumero)) {
        richiestaNumero = parseInt(prompt('inserisci un numero da 1 a 100'));
    } console.log('hai perso');
} else {
    console.log('inserisci un numero da 1 a 100');
}
//livello 2 (oscurare dalla 42 alla 48 e accendere qua sotto)-----------------------------------
if (verificaNumero){
    while (!mine.includes(richiestaNumero)) {
        livelloSecondo;
    } console.log('hai perso');
} else {
    console.log('inserisci un numero da 1 a 100');
}
