document.querySelector('form').addEventListener('submit', e => {

    e.preventDefault();

    fetch('https://reqres.in/api/login', {
        body: JSON.stringify({
            email: document.querySelector('#email').value,
            password: document.querySelector("#password").value
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
    }).then(
            resp => console.log(resp.body)
    )
});
//mi dava errore 400 perche non avevo messo i dati dentro i campi nel browser. Questa è una soluzione data da Andrea, rivedi bene tutto. Ci sono possibilità che anche come avevo fatto io avrebbe funzionato, ma andava migliorato bene perchè aveva delle cose scritte male e magari anche inutili.