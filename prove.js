/*il problema è che il for-loop arriva all'ultimo elemento e tiene quel valore dell'indice
 *della collection per togliere la riga corrispondente. Come risolvere? Vedremo*/
/*
var listButton = document.body.querySelectorAll('.btn');
for(var i = 0; i<listButton.length; i=i+1){
    console.log(i);
    console.log(elem = listButton[i]);
    var par = elem.parentNode.parentNode;
    console.log(par);
}; 
var es = elem.addEventListener("click", () => {
    par.remove();
});
*/
/*soluzione*/

var listButton = document.body.querySelectorAll('.btn');

for(var i = 0; i<listButton.length; i=i+1){
    listButton[i].addEventListener("click", function(e){
        e.target.parentElement.parentElement.remove();
    })
}; 
/* e sempre per mettere l'argomento come parametro della funzione
 * target prende solamente l'elemento che subisce l'evento
 */
