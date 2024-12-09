/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
/**
 * Stampa un saluto diverso in relazione all'orario rilevato
 * 
 * @param {string} name 
 * @returns {string}
 */
const getHello = (name) => {
    const time = new Date()
    const nowHour = time.getHours()
    if (nowHour < 13) {
        return `Buongiorno ${name}`
    } else if (nowHour < 17) {
        return `Buon pomeriggio ${name}`
    } else {
        return `Buonasera ${name}`
    }
}

// Invoca la funzione qui e stampa il risultato in console
getHello(name)
console.log(getHello(name))


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.