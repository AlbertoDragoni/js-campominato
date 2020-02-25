// // Il computer deve generare 16 numeri casuali tra 1 e 100.
// // In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
// // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti
//  si continua chiedendo all’utente un altro numero.
// // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero
// massimo possibile di numeri consentiti.
// // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte
// che l’utente ha inserito un numero consentito.
var numeriSceltiDalComputer = [];

var i = 0;
while (i < 16) {
    var numeriCasuali = generaRandom(1,100);
    numeriSceltiDalComputer.push(numeriCasuali);
    i++;
}
function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
console.log(numeriSceltiDalComputer);

var richiestaNumero = parseInt(prompt('inserisci un numero da 1 a 100'));
var verificaNumero = false;

if (!isNaN(richiestaNumero) && richiestaNumero < 100 && richiestaNumero > 1) {
    var verificaNumero = true;
}
if (verificaNumero){

}
