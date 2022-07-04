const numeroChilometri = parseInt (prompt('Quanti chilometri vuoi percorrere?'));

console.log('Chilometri da percorrere: ' + numeroChilometri);

const etaPasseggero = parseInt (prompt('Quanti hanni hai?'));

console.log('Il passeggero ha: ' + etaPasseggero);

const costo1Chilometro = 0.21;

const prezzoBiglietto = costo1Chilometro * numeroChilometri;

console.log('Prezzo biglietto intero: ' + prezzoBiglietto);

const sconto20 = ((20 / 100) * prezzoBiglietto);
var sconto20rounded = Math.round((sconto20 + Number.EPSILON) * 100) / 100;

const sconto40 = ((40 / 100) * prezzoBiglietto);
var sconto40rounded = Math.round((sconto40 + Number.EPSILON) * 100) / 100;


if (etaPasseggero < 18) {
    const prezzo20 = (prezzoBiglietto - sconto20rounded);
    alert ('Prezzo scontato per i minorenni: ' + prezzo20 + '€');
} else if (etaPasseggero > 65) {
    const prezzo40 = (prezzoBiglietto - sconto40rounded);
    alert ('Prezzo scontato per over 65: ' + prezzo40 + ('€'));
} else {
    alert ('Prezzo del biglietto: ' + prezzoBiglietto + ('€'));
}


