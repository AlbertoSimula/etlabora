

var listButton = document.body.querySelectorAll('table td button');
/*var i = prompt(("dimmi che bottone vuoi togliere"),"")*/

var i =0;
console.log(elem = listButton[i]);
var par = elem.parentNode.parentNode;
console.log(par);
function remover(){
    par.remove();
};
var es = elem.addEventListener("click", remover);
