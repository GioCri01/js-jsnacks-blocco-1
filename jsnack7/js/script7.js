/*
 JSnack 7
 Stampa le potenze di 2 fino a 1000.
 questo snack cela un trabocchetto:  1000 non è una potenza di 2
 perciò per fermarsi prima di 1000 bisogna stampare la potenza prima di incrementarla
 perché altrimenti il controllo viene fatto dopo e si sfora
*/


let base = 2;
let esponente = 2;
let arrPotenze = [];


while(base < 1000){
    arrPotenze.push(base);
    base = base * esponente;
    console.log(base);
    
    
    
    

}

console.log(arrPotenze);
document.getElementById("risultato").innerHTML +="Risultato:"+" " + arrPotenze;















