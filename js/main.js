
//INSERISCI DISTANZA
const distanza = prompt('Inserisci la distanza');
const euro = 0.21;
let prezzo = (distanza * euro);
let sconto 

alert('il prezzo è' + ' ' + prezzo + '€');

const eta = prompt('Inserisci la tua età');

if (eta >= 65) {

    sconto = (prezzo * 0.60);
}

if (eta <= 18) {

    sconto = (prezzo * 0.80);
}

if (eta > 18 && eta < 65) {

    sconto = prezzo;
}

let PrezzoFinale = sconto.toFixed(2);
alert('il prezzo finale è' + ' ' + PrezzoFinale + '€');






