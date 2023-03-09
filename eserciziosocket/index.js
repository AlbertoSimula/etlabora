import {Chat} from '../eserciziosocket/chat'

const messages = document.querySelector('textarea[name="messages"]'); //vedere i messaggi
const inptMessage = document.querySelector('input[name="message"]'); //input messaggi

const onMessage = (message) => { //funzione per i messaggi
    messages.innerHTML += "\r\n".concat(message); // "\r\n" serve per mandare a capo ogni messaggio
};

const chat = new Chat(onMessage); //nuova classe ogni volta in funzione dei messaggi che vedo

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    chat.sendMessage(inptMessage.value); //
});