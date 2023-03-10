/*come scrivere le regExps*/


const regExpr = /asd/;

const regExpre = new regExp()
s = "stringa da analizzare"
regExp.test(s) //controlla se nella stringa ho corrispondenza
regExp.exec(s) //torna un array con tutte le occorrenze

//per ogni cosa vai su regExp101.com per vedere tutte le codifiche particolari



/*come copiare oggetti*/

const o1 = {
    username: "boh"
}

const o2 = o1;


/*non da una copia per valore dell'o1, ma solo del collegamento alla zona di memoria, vedi variabili*/

const o3 = {
    username: "boh"
}

const o4 = {
    email: "aaa@aaa.it"
}
for(const k in o4){ //ciclo iterativo for-in introdotto con ES6
    o3[k]=o4[k];  //aggiungo la chiave con il suo valore; se avessi avuto due chiavi uguali, avrei sovrascritto il valore
}

const numbers = [1,2,3,4];
for(const number of numbers){ //iterazione di es6, cicla tutti gli elementi dell'array

}
/*approccio diverso*/
/*
new Object() //{} (object literal)
new Array()  //[] (array literal)
*/

Object.assign(dovevogliocopiare, sorgente/i); //copia le chiavi di un oggetto in un altro
//in caso avessi più sorgenti, lui parte dalla sorgente piu a destra e inizia a inserirle una nell'altra a cascata

/*in dovevogliocopiare posso mettere semplicemente {} per copiare totalmente un oggetto in un oggetto vuoto*/
//creo una nuova zona di memoria uguale alla sorgente e due zone nell'heap con lo stesso valore


/*backtick (Alt+96)*/ 

/*serve a interpolare una stringa con dei valori usando anche ${}*/

//la backtick può sostituire il concat


