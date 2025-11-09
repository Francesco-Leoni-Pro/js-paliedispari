// Chiediamo all'utente di inserire una parola
const parolaUtente = prompt("Inserisci una parola:");

// Chiamiamo la funzione per verificare se è palindroma
const risultato = isPalindroma(parolaUtente);

// Mostriamo il risultato
if (risultato) {
  console.log(`La parola "${parolaUtente}" è palindroma!`);
} else {
  console.log(`La parola "${parolaUtente}" non è palindroma.`);
}

function isPalindroma(parola) {
  // Rimuoviamo eventuali spazi e convertiamo tutto in minuscolo
  parola = parola.toLowerCase().replace(/\s+/g, "");

  // Confrontiamo le lettere una a una dal principio e dalla fine
  for (let i = 0; i < parola.length / 2; i++) {
    if (parola[i] !== parola[parola.length - 1 - i]) {
      return false; // Se una lettera non coincide, non è palindroma
    }
  }
  return true; // Se tutte coincidono, è palindroma
}

// ----- PARI O DISPARI -----

// 1. L'utente sceglie pari o dispari
let sceltaUtente = prompt("Scegli: pari o dispari").toLowerCase();

// Controllo base per sicurezza
while (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
  sceltaUtente = prompt("Scelta non valida! Scrivi 'pari' o 'dispari':").toLowerCase();
}

// 2. L'utente inserisce un numero da 1 a 5
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
  numeroUtente = parseInt(prompt("Numero non valido! Inserisci un numero da 1 a 5:"));
}

// Funzione che genera un numero random tra 1 e 5
function generaNumeroRandom() {
  return Math.floor(Math.random() * 5) + 1;
}

const numeroComputer = generaNumeroRandom();
console.log("Numero del computer:", numeroComputer);

const somma = numeroUtente + numeroComputer;
console.log("Somma:", somma);

function isPari(numero) {
  return numero % 2 === 0;
}

const sommaPari = isPari(somma);

if ((sommaPari && sceltaUtente === "pari") || (!sommaPari && sceltaUtente === "dispari")) {
  console.log("Hai vinto!");
} else {
  console.log("Il computer ha vinto!");
}