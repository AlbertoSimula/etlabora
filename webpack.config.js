const path = require('path');

module.exports = {
    entry: './esercizi.js', /*di solito è index.js*/
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
};