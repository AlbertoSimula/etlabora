var d = document.body.firstElementChild;
d.style.background = "red";

d.nextElementSibling.style.background="green";
//potevo creare una variabile al secondo per definire l'ul e usarci poi lastElementChild sopra
var g = document.body.lastElementChild.previousElementSibling.lastElementChild;
g.style.background = "white";