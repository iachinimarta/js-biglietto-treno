const numeroChilometri = parseInt (prompt('Quanti chilometri vuoi percorrere?'));

console.log('Chilometri da percorrere: ' + numeroChilometri);

const etaPasseggero = parseInt (prompt('Quanti hanni hai?'));

console.log('Il passeggero ha: ' + etaPasseggero);

const costo1Chilometro = 0.21;

const prezzoBiglietto = costo1Chilometro * numeroChilometri;

console.log('Prezzo biglietto intero: ' + prezzoBiglietto);

const scontoMinorenni = ((20 / 100) * prezzoBiglietto);

const scontoOver65 = ((40 / 100) * prezzoBiglietto);


if (etaPasseggero < 18) {
    const prezzo20 = (prezzoBiglietto - scontoMinorenni);
    alert ('Prezzo scontato per i minorenni: ' + prezzo20 + '€');
} else if (etaPasseggero > 65) {
    const prezzo40 = (prezzoBiglietto - scontoOver65);
    alert ('Prezzo scontato per over 65: ' + prezzo40 + ('€'));
} else {
    alert ('Prezzo del biglietto: ' + prezzoBiglietto + ('€'));
}


