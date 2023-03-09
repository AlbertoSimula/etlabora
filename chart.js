import Chart from 'chart.js/auto';

const chart = new Chart(ctx, {
    type: 'line',
    data: data //evitabile perche è qualcosa che prende i dati da qualcosa di esterno
});