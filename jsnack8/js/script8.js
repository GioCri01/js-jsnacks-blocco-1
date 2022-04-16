/*
 JSnack 8
 Chiedi un numero di 4 cifre all’utente
 e calcola la somma di tutte le cifre che compongono il numero.
 in questo caso possiamo sfruttare a nostro vantaggio il fatto che
 la funzione prompt restituisca una stringa anche se si è digitato un numero
 e recuperare una cifra alla volta usanto il ciclo for per scorrere la stringa numerica
*/

let numeroInserito =prompt("Inserisci un numero");

let somma = 0;
const limit = 4;

if(isNaN(numeroInserito)){
    alert("Errore! inserire un numero");
}else if(numeroInserito.length > limit || numeroInserito.length < limit ) {
    
    alert("inserisci un numero di 4 cifre");
}





for(i=0; i < numeroInserito.length ; i++){
    let convNumero = parseInt(numeroInserito.charAt(i));
    console.log(i,convNumero);
    
    somma = somma + convNumero;
    
}
console.log(somma);

document.getElementById("numero-inserito").innerHTML += numeroInserito;
document.getElementById("risultato").innerHTML += somma;



