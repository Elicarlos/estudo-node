const db = require('../config/db')


const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//Este comando só deve se usando uma unica vez, como teste
//depois deve ser apagado
//Post.sync({ force: true})
module.exports = Post