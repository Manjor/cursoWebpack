const webpack = require('webpack')

//Exporta o objeto que representa toda a configuração do webpack
module.exports = {
    //Modo de Desenvolvimento
    //mode: production
    //no modo producao irá realizar a minimacao do codigo main.js na pasta dist
    mode: 'development',
    //Entrada raiz, serpá principal.js nesse modulo
    entry: './src/principal.js'
}