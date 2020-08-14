/* Primeira aula
var funcaoSoma = require('./soma')
var funcaoSub = require('./sub')
var funcaoMult = require('./mult')
var funcaoDiv = require ('./div')
console.log(funcaoSoma(10,10))
console.log(funcaoSub(10,5))
console.log(funcaoDiv(20,2))
     */

/* Uso do http para criar servidor
var http = require('http')
http.createServer(function (req, res){
    res.end('Bem vindo ao meu blog')
}).listen(8081)
console.log('Servidor funcionando') */

var express = require('express')
//levar todo o express dentro de app
const app = express()
const handlebars = require('express-handlebars')

// Config template Engine
    app.engine('handlebars', handlebars({ defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')


//Conexao com banco de dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize('testeseq', 'root', 'novosga', {
    host: 'localhost',
    dialect: 'mysql'
})


/* app.get('/', function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})

app.get('/sobre', function(req, res){
    res.sendFile(__dirname +'/html/sobre.html')
})

app.get('/blog', function(req, res){
    res.send('Bem vindo ao blog')
})


///Parametros

app.get('/ola/:nome', function(req, res){
    res.send(req.params.nome)
})
 */
//Esta funcao deve ser a ultima


app.listen(8081, function(){
    console.log('Servidor rodando na porta 8081')
})




