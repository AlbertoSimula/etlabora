/*esercizio for*/
/*a%b se da 0, l'if ritorna false*/
/*potevo usare anche NOT mettendo !davanti alla parentesi dell'if*/
/*messi i prompt per fare degli input, ma è solo per provarli*/ 
/*
for (var i=1; i<=100; i=i+2){
    if (i%5==0) {
    console.log(i + " è multiplo di 5")
    }
};
*/
/*esercizio paridispari*/
/*
var n=0;
var d=2;
var i=1;
while (d*i<n){
    i=i+1;
};
if(d*i==n){
    console.log("il numero " + n + " diviso per " + d + " non da resto quindi è paro")
} else{
    console.log("il numero " + n + " diviso per " + d + " da resto quindi è disparo")
};

/*metodo for utile, ma poco elegante*/ 


/*
for(var i=1; i<n/d; i=i+1){
}
if(d*i==n){
    console.log("il numero " + n + " diviso per " + d + " non da resto quindi è paro")
} else{
    console.log("il numero " + n + " diviso per " + d + " da resto quindi è disparo")
};
*/
/*sottrazione*/
/*
var n=0;
var t=n;
var d=2;
do{
    t=t-d;
} while(t>0);
if(t==0 || t==-d){
    console.log(n + " è pari")
}else{
    console.log(n + " è dispari")
}
*/
/*funzione*/
/*
var d=prompt(("dimmi un numero, che mi serve un incremento"),"");
function isEven(n){
    var t=n;
    do{
        t=t-d;
    } while(t>0);
    if(t==0 || t==-d){
        return("Pari")
    }
    return("Dispari");
};
*/
/*
var res = isEven(prompt("dimmi un numero e capisco se è pari o dispari"), "");
console.log(res);
*/
/*funzioni ricorsive*/
/*
var res = 1;
function fattoriale(n){
    if(n==0){
        return res;
    }
    return res = n*fattoriale(n-1)
}
fattoriale(prompt("dimmi un numero e ci faccio il fattoriale"), "");
console.log(res);
*/
/*esercizi bubbling*/

var butts = document.body.querySelectorAll("form button");

for(i=0; i<butts.length; i++){
    butts[i].addEventListener("click", function(e){
        e.preventDefault();
        var email = document.body.querySelector('input[name="email"]'); /*meglio evitare di usare gli id, usare cose del genere*/
        console.log(email.value);                                          /*potevo scrivere direttamente email.value e prendeva uguale*/
        var psswd = document.body.querySelector('input[name="password"]')
        console.log(psswd.value);
    });
};