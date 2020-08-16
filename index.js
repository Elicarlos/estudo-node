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
const bodyParser = require('body-parser')
const Post = require('./models/Post')

 //Configuração do bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Config template Engine
    app.engine('handlebars', handlebars({ defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')


//Conexao com banco de dados
// const Sequelize = require('sequelize') Esta linha foi para um aquivo db.js junto com dialeto de conexao
/* const sequelize = new Sequelize('testeseq', 'root', 'novosga', {
    host: 'localhost',
    dialect: 'mysql'
})
 */




//Rotas
app.get('/cadastro', function(req, res){
    res.render('cadastro')
})

app.get('/', function(req, res){
    //Tras todos so posts do banco de dados
   Post.findAll({ order: [['id', 'DESC']]}).then(function( posts ){
       res.render('home', {posts: posts})
   })
})

app.post('/add', function(req, res){    
    // envia os dodos do fomulario para a url /addd
    /* res.send(`Titulo: ${req.body.titulo} Conteudo: ${req.body.conteudo}`) */
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        // res.send('Post criado com sucesso!!')
        res.redirect('/')
    }).catch(function(error){
        res.send('Erro ao criar o posto ' + error)
    })
})


app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send('Potagem deletado  com sucesso!')

    }).catch(function(error){
        res.send('Erro ao deletar' + error)
        
    })
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





