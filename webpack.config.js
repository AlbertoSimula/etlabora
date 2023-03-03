const path = require('path');

module.exports = {
    entry: './esercizi.js', /*di solito è index.js*/
    mode: 'development',
    module: {
        rules: [
        {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
            presets: ['@babel/preset-env']
            }
        }
        }
    ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js',
    },
};