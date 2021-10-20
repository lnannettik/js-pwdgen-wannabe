

const nomeUtente = prompt('Inserisci il tuo nome');
console.log
const cognomeUtente = prompt('Inserisci il tuo cognome');

const coloreUtente = prompt('Inserisci il tuo colore preferito');

const passUtente = nomeUtente + cognomeUtente + coloreUtente;

document.getElementById('risultato').innerHTML = `La tua password (molto poco sicura) è: ${passUtente}21`;