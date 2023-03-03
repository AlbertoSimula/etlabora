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
/* e sempre per mettere l'argomento come parametro della funzione (callback, richiamo della funzione)
 * target prende solamente l'elemento che subisce l'evento
 */

/*xmlhttprequest*/

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.addEventListener("load", function(){
    var users = JSON.parse(xhr.responseText);
    var tbody = document.querySelector("tbody");
    users.forEach(function(user){
        tbody.innerHTML = tbody.innerHTML.concat(
            '<tr class="riga">',
                    '<td class="user">', user.id, '</td>',
                    '<td class="email">', user.email, '</td>',
                    '<td class="name">', user.name,  '</td>',
                    '<td>',
                        '<button class="btn"> Elimina </button>',
                    '</td>',
                '</tr>'
        )
    });
/*se messo fuori non sare*/
    var listButton = document.body.querySelectorAll('.btn');

    for(var i = 0; i<listButton.length; i=i+1){
        listButton[i].addEventListener("click", function(e){
            e.target.parentElement.parentElement.remove();
        })
    }; 
});

xhr.send();
