/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero.
 Il programma stampa la somma di tutti i numeri inseriti.
 Esegui questo programma in due versioni, con il for e con il while (facoltativo)
*/
let numeriInseriti;


const limit = 5;
let somma = 0;

for( let i=1; i <= limit; i++){
     numeriInseriti = parseInt(prompt("inserisci un numero"));
     somma = somma + numeriInseriti;
     
     
    
    console.log("Numero Inserito",numeriInseriti);
    
    

}

const totale = somma ;
console.log(" il totale è",totale);



