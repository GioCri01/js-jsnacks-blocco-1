/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const primaParola = prompt(" inserisci la prima parola");
const secondaParola = prompt(" inserisci la seconda parola");

let primaParolaLunghezza = primaParola.length;
let secondaParolaLunghezza = secondaParola.length;



if(primaParolaLunghezza > secondaParolaLunghezza){
    document.getElementById("parola1").innerHTML += secondaParola;
    document.getElementById("parola2").innerHTML += primaParola;

    
}