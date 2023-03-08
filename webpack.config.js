const path = require('path');

module.exports = {
    entry: {esercizi:'./esercizi.js',
    login: './login autenthication/login.js'}, /*di solito è index.js*/
    mode: 'development',
    module: {
        rules: [
        {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env'] /*permette di trasformare tutto ES6+ a ES5*/
            }
        }
        }
    ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
};