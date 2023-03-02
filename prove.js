var listButton = document.body.querySelectorAll('table td button');
var i = 0;
while(i<listButton.length){
    console.log(i);
    console.log(elem = listButton[i]);
    var par = elem.parentNode.parentNode;
    console.log(par);
    i=i+1;
};
function remover(){
    par.remove();
};
var es = elem.addEventListener("click", remover);