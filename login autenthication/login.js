import {login} from "./functions/loginconawait";

document.querySelector('form').addEventListener('submit', e => {

    e.preventDefault();

    const email = document.querySelector("#email").value; //sono un coglione, devo prendere il value, non il tag html
    const password = document.querySelector('#password').value;
    login(email, password);

    
});
//mi dava errore 400 perche non avevo messo i dati dentro i campi nel browser. Questa è una soluzione data da Andrea, rivedi bene tutto. Ci sono possibilità che anche come avevo fatto io avrebbe funzionato, ma andava migliorato bene perchè aveva delle cose scritte male e magari anche inutili.

