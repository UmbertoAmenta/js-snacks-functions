/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
const howManyVowels = (text) => {
    let textVowels = text.match(/a|e|i|o|u/gi)
    return textVowels.length
}


// Invoca la funzione qui e stampa il risultato in console
howManyVowels(word)
console.log(howManyVowels(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)