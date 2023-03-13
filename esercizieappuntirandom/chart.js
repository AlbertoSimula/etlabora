import Chart from 'chart.js/auto';
//funziona?si. è utile? forse no, meglio importarsi solo ciò che mi serve

const ctx = document.querySelector('#chart');

const inputs = {
    min: -100,
    max: 100,
    count: 8,
    decimals: 2,
    continuity: 1
};
const data = {
    labels: [],
    datasets: [
    {
        label: 'Dataset',
        data: [],
    }]
};
const chart = new Chart(ctx, {
    data, //evitabile perche è qualcosa che prende i dati da qualcosa di esterno
    type: 'line'
    
});

let lettera = 65;
let nameId = data.labels;
let dataId = data.datasets[0].data;
const inserimento = setInterval(()=>{  //variabile dell'inserimento
    
    dataId.push(Math.random() * 100); //Math.random è tra 0 e 1
    nameId.push(String.fromCharCode(lettera));

    chart.update(); //aggiorna il grafico, reinderizzandolo per ogni punto nuovo

    if(lettera === 90){
        clearInterval(inserimento); //fermare variabile dell'inserimento
        return;
    }
    lettera++;
}
, 500)


/*
* == confronta ignorando il tipo "1"==1 => True; 
* === confronta prima il type, piu usato dato il tipizzamento dinamico, poi il valore
*/

