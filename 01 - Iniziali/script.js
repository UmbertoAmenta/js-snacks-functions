/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
/**
 * Partendo da un array ne ottiene uno nuovo con le iniziali degli elementi dell'array usato come parametro
 * 
 * @param {array} list - lista di termini
 * @returns {array} Iniziali dei termini della lista
 */
const getfirstCharacters = (list) => {
    let firstCharacterList = []
    for (let i = 0; i < list.length; i++) {
        let firstCharacter = list[i].charAt(0)
        firstCharacterList.push(firstCharacter)
    }
    return firstCharacterList
}


// Invoca la funzione qui e stampa il risultato in console
getfirstCharacters(names)
console.log(getfirstCharacters(names))



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]