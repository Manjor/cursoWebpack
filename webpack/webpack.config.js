//modoDev seta a variavel de ambiente
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
//MiniCssEx... extrair o css para um arquivo separado do js principal
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//UglifyPlugin realiza a minimificacao
const UglifyPlugin = require('uglifyjs-webpack-plugin')
//Optimize realiza a minimificacao do css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

//Exporta o objeto que representa toda a configuração do webpack
module.exports = {
    //Modo de Desenvolvimento
    //mode: production
    //no modo producao irá realizar a minimacao do codigo main.js na pasta dist
    mode: modoDev ? 'development':'production',
    //Entrada raiz, serpá principal.js nesse modulo
    entry: './src/principal.js',
    //Configura o nome e pasta do(s) arquivo(s) de saída
    output:{
        //nome do arquivo
        filename: 'principal.js',
        //pasta destino do arquivo de saída
        path: __dirname + '/public'
    },
    devServer:{
        contentBase: './public',
        port: 8080
    },
    optimization: {
        minimizer:[
            new UglifyPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    //Define os Plugins para a aplicação
    plugins: [
        new MiniCssExtractPlugin({
            //Nome do arquivo que será gerado apartir da interpretacao do css
            filename: "estilo.css"
        })
    ],
    module: {
        //Regras com um array de loads
        rules: [{
            test : /\.s?[ac]ss$/,
            use: [
                //plugins para leitura de arquivos css
                MiniCssExtractPlugin.loader, //Extrai o css para um arquivo externo
                //'style-loader', //Adiciona o CSS na DOM com a tag <style>
                'css-loader', //interpretar @import, url()
                'sass-loader',
            ]
        },{
            test: /\.(png|svg|jpg|gif|jpeg,xml)$/,
            use : ['file-loader']
        }]
    }
}