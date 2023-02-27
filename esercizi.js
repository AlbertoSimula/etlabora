/*esercizio for*/
/*a%b se da 0, l'if ritorna false*/
/*potevo usare anche NOT mettendo !davanti alla parentesi dell'if*/
for (var i=1; i<=100; i=i+2){
    if (i%5==0) {
    console.log(i + " è multiplo di 5")
    }
}
    
    
/*esercizio paridispari*/
var n=11;
var d=2;
var i=1;
while (d*i<=n) {
    i=i+1;
};
if(d*i==n){
    console.log("il numero " + n + " diviso per " + d + " non da resto quindi è paro")
} else{
    console.log("il numero " + n + " diviso per " + d + " da resto quindi è disparo")
};
/*metodo for*/
for(var i=1; i<n/d; i=i+1){
}
if(d*i==n){
    console.log("il numero " + n + " diviso per " + d + " non da resto quindi è paro")
} else{
    console.log("il numero " + n + " diviso per " + d + " da resto quindi è disparo")
};
