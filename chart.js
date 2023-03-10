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
    labels: ["A","B","C","D","E","F","G","H"],
    datasets: [
    {
        label: 'Dataset',
        data: [-10, 15, 11, 4, 9, 22, 32, -15],
    }
    ]
};
const chart = new Chart(ctx, {
    data, //evitabile perche è qualcosa che prende i dati da qualcosa di esterno
    type: 'line'
    
});