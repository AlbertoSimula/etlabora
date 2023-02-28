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


/*modo per definire sempre nuovi user senza ripetere il codice, usato cosi posso definirli
ogni volta richiamando la nuova funzione usando new e creando una nuova variabile user-i*/


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
};
var user = createUser(15, "Topo", "Lino");
console.log("Ciao "+ user.nome + " !");


/*funzioni costruttrici*/
function NewUser(age, name, surname){
    this.age = age;
    this.name = name;
    this.surname = surname;
    this.sayHi = function(){ //anche con le funzioni va cosi
        console.log("Ciao " + this.name + " !");
    }
};
var user1 = new NewUser(18, "Bello", "Figo");
console.log("Ciao " + user1.name + " !");
/*new è un costrutto particolare, keyword che chiede all'interprete ad allocare nell'HEAP di
allocare l'oggetto*/

/*Quando porto this fuori dal contesto dell'oggetto, perde la sua funzionalità. Esce 
undefined perchè non trova la proprietà a cui si riferisce*/

var fn = user.sayHi;
fn();

/*Per rimediare si usa questa soluzione "storica"*/
/*
this.sayHi = (function(){ //anche con le funzioni va cosi
    console.log("Ciao " + this.name + " !");
}).bind(this);
*/