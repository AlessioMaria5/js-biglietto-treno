
//INSERISCI DISTANZA
const distanza = prompt('Inserisci la distanza');
const euro = 0.21;
let prezzo = (distanza * euro);
let sconto 

alert('il prezzo è' + ' ' + prezzo + '€');

const età = prompt('Inserisci la tua età');

if (età >= 65) {

    sconto = (prezzo * 0.60);
}

if (età <= 18) {

    sconto = (prezzo * 0.80);
}

if (età >18 && 65) {

    sconto = prezzo;
}

let PrezzoFinale = sconto.toFixed(2);
alert('il prezzo finale è' + ' ' + PrezzoFinale + '€');






