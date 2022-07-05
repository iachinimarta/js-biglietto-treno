const numeroChilometri = parseInt (prompt('Quanti chilometri vuoi percorrere?'));

const etaPasseggero = parseInt (prompt('Quanti hanni hai?'));

const costo1Chilometro = 0.21;

let prezzoBiglietto = costo1Chilometro * numeroChilometri;

let messaggio = ''; //definisco così il messaggio in modo che possa essere modificato nel corso del codice

const sconto20 = ((20 / 100) * prezzoBiglietto);

const sconto40 = ((40 / 100) * prezzoBiglietto);

let prezzo20 = (prezzoBiglietto - sconto20); //spostate le variabili che erano dentro if 

let prezzo40 = (prezzoBiglietto - sconto40); //spostate le variabili che erano dentro if 

console.log('Chilometri da percorrere: ' + numeroChilometri);
console.log('Il passeggero ha: ' + etaPasseggero);
console.log('Prezzo biglietto intero: ' + prezzoBiglietto);

if (etaPasseggero < 18) {
    prezzoBiglietto = prezzo20; //meglio non definire delle variabili all'interno delle if
    messaggio = 'Prezzo scontato per i minorenni: ' + prezzo20.toFixed(2) + '€';
} else if (etaPasseggero > 65) {
    prezzoBiglietto = prezzo40; //meglio non definire delle variabili all'interno delle if
    messaggio = 'Prezzo scontato per over 65: ' + prezzo40.toFixed(2) + '€';
} else {
    messaggio = 'Prezzo del biglietto: ' + prezzoBiglietto.toFixed(2) + '€';
}

alert(messaggio); //definisco così il messaggio in modo che possa essere modificato nel corso del codice

