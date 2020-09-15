const Database = require('sqlite-async')

function execute(db){
    //criar as tabelas do banco de dados
    //(``) -> entre parenteses e crases para dar instruções sql
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)

}
//inicializar o db: node src/database/'nome do arquivo.js'. 
//clique com o botão direito no database.sqlite -> open database -> é criado a lista dos objetos no canto inferior esquerdo

module.exports = Database.open(__dirname+'/database.sqlite').then(execute) 
//then usado para não conflitar a leitura de dados enquanto o db não abriu ainda.