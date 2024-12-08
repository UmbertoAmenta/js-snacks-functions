/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * Determina il numero di vocali presenti in una stringa
 * 
 * @param {string} text 
 * @returns 
*/
const howManyVowels = (text) => {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let textVowels = "0"
    for (let i = 0; i < text.length; i++) {
        const currentChar = text[i]
        if (vowels.includes(currentChar)) {
            textVowels++
        }
    }
    return textVowels
}

// alternativa
// const howManyVowels = (text) => {
//     let textVowels = text.match(/a|e|i|o|u/gi)
//     return textVowels.length
// }

// Invoca la funzione qui e stampa il risultato in console
howManyVowels(word)
console.log(howManyVowels(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)