const Database = require('./db.js')
const createProffy = require('./createProffy.js')

Database.then((db) =>{
    //inserir dados

    proffyValue = {
        name: "Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"899165312",
        bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    }

    classValue = {
        subject: "Química",
        cost:"20", 
        //proffyid vai ser gerado pelo banco de dados
    }

    classScheduleValues = [
        // class id virá pelo banco de dados após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },

        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }

    ]

    //createProffy(db, {proffyValue, classValue, classScheduleValue})


    //consultar os dados inseridos
})