const path = require('path');

module.exports = {
    entry: './src/esercizi.js', /*di solito è index.js*/
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
};