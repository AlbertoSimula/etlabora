/*console.log(dog);
var dog = 3;*/
/*stiamo iniziando a valutare come il js engine 
legge lo script: Analisi = legge quelle linee dove ci sono parole chiave; 
tutte le var e le function "vengono portate in cima"
es.
var dog; crea variabile, ma senza valore => undefined
console.log(dog);
var dog = 3;

Processo chiamato Hoisting
*/ 

/*Oggetti*/
var o={
    age:18,
    name:"Nome",
    surname: "Cognome",
    sayHi:function(){
        console.log("Ciao " + this.name + " !")
    } /*Function expression = funzione anonima e assegnazione*/
};

o.sayHi(); /*richiamo per eseguire il metodo*/