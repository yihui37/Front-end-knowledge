module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
        }]
    }
}