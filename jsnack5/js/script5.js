/*
 JSnack 5
 Crea un array vuoto.
 Chiedi per 6 volte all’utente di inserire un numero,
 se è dispari inseriscilo nell’array
*/
let numeroUtente;
let arrNumeri = [];
limit = 6;






for(let i = 1 ; i <= limit ; i++){
    numeroUtente=parseInt(prompt("Inserisci un numero"));
    if(!(numeroUtente % 2 === 0)){
        arrNumeri.push(numeroUtente);
    }
}
    
    console.log(arrNumeri);
