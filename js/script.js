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