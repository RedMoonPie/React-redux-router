const path = require('path');
const HtmlwebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //la ruta de nuestro index js principal
    entry: './src/index.js',
    output:{
        //donde se guardaran lo archivos resultantes cuando se compila, directorio en donde estamos
        //directorio en donde guardaremos nuestro archivo
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //resolvemos las extensiones que vamos a usar 
    resolve:{
        extensions:['.js','.jsx']
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test: /\.html$/,
                use:[
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(s*)css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]

            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },

        ]
    },
    plugins:[
        new HtmlwebPackPlugin({
            template: './public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        }),
    ]
}