const webpack = require('webpack')

//Exporta o objeto que representa toda a configuração do webpack
module.exports = {
    //Modo de Desenvolvimento
    //mode: production
    //no modo producao irá realizar a minimacao do codigo main.js na pasta dist
    mode: 'development',
    //Entrada raiz, serpá principal.js nesse modulo
    entry: './src/principal.js',
    //Configura o nome e pasta do(s) arquivo(s) de saída
    output:{
        //nome do arquivo
        filename: 'principal.js',
        //pasta destino do arquivo de saída
        path: __dirname + '/public'
    },
    module: {
        //Regras com um array de loads
        rules: [{
            test : /\.css$/,
            use: [
                //plugins para leitura de arquivos css
                'style-loader', //Adiciona o CSS na DOM com a tag <style>
                'css-loader', //interpretar @import, url()
            ]
        }]
    }
}