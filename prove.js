var listButton = document.body.querySelectorAll('table td button');

    console.log(elem = listButton.children);
    var par = elem.parentNode.parentNode;
    console.log(par);
;
elem.addEventListener("click", ()=>{
    par.remove();
});
