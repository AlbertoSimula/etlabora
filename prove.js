var listButton = document.body.querySelectorAll('table td button');
for(var i = 0; i<listButton.length; i=i+1){
    console.log(i);
    console.log(elem = listButton[i]);
    var par = elem.parentNode.parentNode;
    console.log(par);
};
elem.addEventListener("click", ()=>{
    par.remove();
});
