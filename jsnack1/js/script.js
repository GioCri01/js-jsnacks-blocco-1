/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const primoNumero = prompt("inserisci il primo numero");
if(isNaN(primoNumero)){
    alert("Errore! Inserire un numero")
    
} 
const secondoNumero = prompt("inserisci il seconodo numero");
if(isNaN(secondoNumero)){
    alert("Errore !Inserire un numero")
}
console.log(primoNumero);
console.log(secondoNumero);

if(primoNumero > secondoNumero){
    alert("il numero piu alto è il :"+" " + primoNumero);
}else if(secondoNumero > primoNumero){
    alert("il numero piu alto è il :" +" " + secondoNumero);

}else{
    alert(" pareggio");
}



