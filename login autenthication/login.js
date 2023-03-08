import {login} from "./functions/loginconawait";




document.querySelector('form').addEventListener('submit', e => {

    e.preventDefault();

    email.document.querySelector("#email"),
    password.document.querySelector('#password'),
    login(email, password);

    
});
//mi dava errore 400 perche non avevo messo i dati dentro i campi nel browser. Questa è una soluzione data da Andrea, rivedi bene tutto. Ci sono possibilità che anche come avevo fatto io avrebbe funzionato, ma andava migliorato bene perchè aveva delle cose scritte male e magari anche inutili.

