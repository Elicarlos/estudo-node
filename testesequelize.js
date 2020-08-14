const Sequelize = require('sequelize')
const sequelize = new Sequelize('testeseq', 'root', 'novosga', {
    host: 'localhost',
    dialect: 'mysql'
})

/* sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso!!!')

}).catch(function(error){
    console.log('Erro de conexão!!!' + error)
})


 */


 const Postagem = sequelize.define('postagens', {
     titulo: {
         type: Sequelize.STRING
     },
     conteudo: {
         type: Sequelize.TEXT
     }
 })

 Postagem.create({
     titulo: 'Um Titulo',
     conteudo: 'Uma conteudo'
 })


 const Usuario = sequelize.define('usuarios', {
     nome: {
         type: Sequelize.STRING
     },
     sobrenome:{
        type: Sequelize.STRING
     },
     
     email: {
         type: Sequelize.STRING
     }
        
     
 })

 //Usuario.sync({ force: true })