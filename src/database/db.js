const Database = require('sqlite-async')
Database.open(__dirname+'/databse.sqlite').then(execute)

function execute(){
    console.log("cheguei aqui :)")

}
//inicializar o db: node src/database