const bands = [
    'The Plot in You', 'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma jean', 'The Bled',
    'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

/* -1: move `a` para um indice anterior a `b`
 *  0: não altera os indices
 *  1: move `b` para um indice anteriar a `a`
 */

function strip(bandName){
    /* replace() vai substituir `a`,`the` e `an` por vazioe depois retirar os espaços */
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

/* ----------------------------- Se tiver sem `{}` precisa do `return` */
const sortedBands = bands.sort((a,b) => strip(a) > strip(b)? 1: -1 );

/* Retorna uma lista com as listas criadas e junta todas em uma string  */
document.querySelector("#bands").innerHTML = 
    sortedBands
        .map(band => `<li>${band}</li>`)
        .join('');