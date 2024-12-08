/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Permette la ricerca, all'interno di un array, degli elementi che iniziano per il carattere desiderato
 * 
 * @param {array} names - lista termini
 * @param {string} charToFind - Carattere (iniziale) da filtrare
 * @returns {array} Lista elementi filtrata per il primo carattere
 */
const findFirstChar = (names, charToFind) => {
    const filteredNames = []
    for (let i = 0; i < names.length; i++) {
        const name = names[i]
        if (charToFind === name[0]) {
            filteredNames.push(name)
        }
    }
    return filteredNames
}




// alternativa
// const findFirstChar = (names, charToFind) => {
//     return names.filter(name => name.startsWith(charToFind))
// }

// Invoca la funzione qui e stampa il risultato in console
findFirstChar(names, "A")
console.log(findFirstChar(names, "A"))



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]