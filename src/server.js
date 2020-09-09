const proffys = [
    {
        name: "Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"899165312",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química",
        cost:"20", 
        weekday:[0], 
        time_from:[720], 
        time_to:[1220]
    },

    {
        name: "Mayk Brito",
        avatar:"https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp:"899165312",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Desenvolvimento Web",
        cost:"20", 
        weekday:[1], 
        time_from:[720], 
        time_to:[1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",

]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}
function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){ //req.query é o que armazena os dados escolhidos pelo usuário
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query

    //se tiver dados, adicionar
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty){

        data.subject = getSubject(data.subject)
        //adicionar dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }
    

    //se não tiver, mostrar a página
    return res.render("give-classes.html", {subjects, weekdays})
}

//chamar o servidor
const express = require('express')
const server = express()

//configurar nunjucks. Template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true, //desativa o cache para ter sempre a versão mais atual
    
})

//configuração de arquivos estáticos(html,css,scripts,img,tal)
server
.use(express.static("public"))

//rota, caminho que o servidor deve seguir
.get("/", pageLanding)
.get("/study", pageStudy)   
.get("/give-classes", pageGiveClasses)   
//porta que ele irá se conectar
.listen(5500)
//abri o servidor no terminal usando node src/server.js

//-> para que não tenha que reiniciar o servidor toda vez que salvar o arquivo, 
//     usa-se o comando npm run dev no console