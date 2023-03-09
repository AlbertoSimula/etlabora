export class Chat{
    #_socket
    #_messages = []; //array dei messaggi in arrivo

    constructor(onMessage) {
        this.#_messages;
        this.#_socket = new WebSocket('wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self');
        
        //inizializzo il socket 
        //eventlistener sull'apertura
        this.#_socket.addEventListener('open', e => {
            this.#_socket.send('Connection estabilished'); //metodo che manda i messaggi una volta stabilizzata la connessione
        });
        
        //eventlistener sull'invio
        this.#_socket.addEventListener('message', e => {
            this.#_messages.push(e.data); //inserisco ogni messaggio dentro l'array dei messaggi
            onMessage(e.data); //funzione che riporta i messaggi
        });
    }

    //funzione per mandare i messaggi
    sendMessage(message){
        this.#_socket.send(message);
    };
    
    
}