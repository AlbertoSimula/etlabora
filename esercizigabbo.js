
<html>
<body>
  <div>Inizio</div> //FirstChild

  <ul> //LastChild
    <li>
      <b>Informazione</b>
    </li>
  </ul>
</body>
</html>

document.body.firstChild.nextSibling == ul;
document.body.lastChild.previousSibling == div;
document.body.parentNode == html;





Guardiamo questa pagina:

<html>
<body>
  <div>Utenti:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
</body>
</html>

Per ciascuno dei seguenti, fornire almeno un modo per accedervi:

Il nodo DOM <div> ? document.body.firstChild
Il nodo DOM <ul> ?  document.body.lastChild
Il secondo <li> (con Pete)? document.body.lastChild.firstChild.nextSibling



elem 

elem.lastChild.nextSibling == null == elem.children[0].previousSibling
///////


getElement* 

    getElementById("") 
    getElementsByClassName("") 
    getElementsByTagName("")
    getElementsByName("")

querySelector* //è più preciso perchè va a prendere solo l'elemento che vuoi
    querySelectorAll("table td button") 
    querySelector("table td button") //prende solo il primo, cioè si ferma alla prima occorrenza


<body id="body" type="sette">
  <input id="input" type="text">
  <script>
    alert(input.type); // text
    alert(body.type); // undefined: proprietà del DOM non creata, perché non standard
  </script>
</body>

body.hasAttribute(type) //controllare se body ha come attributo type;
body.getAttribute(type) //sette;
body.setAttribute(type, nove) // scrive nove in type; es.Carosello immagini che cambio valore 
                                all'attributo visibility da hidden a visible//
body.removeAttribute(type)    //rimuove attributo type al tag body         

body.setAttribute(type, nove) //case insensitive

<body data-animal="Elephants">
<script>
  alert(document.body.dataset.animal; // Elephants
</script>


////
modifica elementi 

creare un elemento nell html

document.body.createElement("div");
div.innerHTML("Ciao");
div.className("container");

<div class="container">Ciao</div>

document.body.appendChild(div);

dentro al body abbiamo una ul e un div. vogliamo inserire sopra l'ul un nuovo div

<body>
    <ul></ul>
    <div></div>
</body>


document.body.createElement("div");
div.innerHTML("Ciao");
div.className("nuovo");
body.insertBefore(div, ul) 

//<body>
    <div class="nuovo">Ciao</div>
    <ul></ul>
    <div></div>
</body>



adesso noi vogliamo togliere l'ul

var del = document.body.ul.remove();
del.remove();

//<body>
    <div class="nuovo">Ciao</div>
    <div></div>
</body>

///

events listener 

per interagire con un evento andremo a creare una funzione chiamata handler

1 metodo (meno utilizzato e meno efficace) = andare a scrivere direttamente nel tag HTML la parola 
chiave onevent = "funzione"


esempio
<input onclick = "alert("")">

il problema è che un tag accetto al più una funzione

2 metodo(meno utilizzato e meno efficace) = scrivere nel file js questa sintassi 

input.onclick = function (){
 //codice da eseguire
}
il problema è che un tag accetto al più una funzione

3 metodo (più efficace e piu utilizzato) = .addEventListener(event, handler)


function funzione(){

};
input.addEventListener("click", funzione);
input.removeEventListener(funzione);

principali eventi

click 
contextmenu
mouseover/out 
mousedown/up 
mousemove

submit 
focus 

keydown/up 

DOMContentLoaded