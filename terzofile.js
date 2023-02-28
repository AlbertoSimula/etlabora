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
    nome: "Nome",
    cognome: "Cognome",

    sayHi:function(){
        console.log("Ciao " + this.nome + " !");
    } /*Function expression = funzione anonima e assegnazione*/
};

o.sayHi(); /*richiamo per eseguire il metodo*/

function newUser(age, name, surname){
    this.age = age;
    this.name = name;
    this.surname = surname
};
/*modo per definire sempre nuovi user senza ripetere il codice, usato cosi posso definirli
ogni volta richiamando la nuova funzione usando new e creando una nuova variabile user-i*/

var user1 = new newUser(18, "Bello", "Figo");
console.log("Ciao " + user1.name + " !");

/*metodo ulteriore più ovvio e lineare*/
function createUser(age, nome, cognome){
    return{
        age, //equivale a age: age
        nome, //come age
        cognome, //stessa cosa
        sayHi:function(){
            console.log("Ciao " + this.nome + " !");
        }
    }
}
var user = createUser(15, "Topo", "Lino");
console.log("Ciao "+ user.nome + " !");