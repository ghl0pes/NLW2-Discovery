//------Procurar o Botão ----
/*document para selecionar o doc
querySelector para usar o id
addEventListner para usar da ação click para executar a função cloneField
*/ 
document.querySelector("#add-time")
.addEventListener("click", cloneField)


//---------Executar uma ação
function cloneField()
{
    //---------Duplicar os campos - Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //--------Limpar os campos - Que campo?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento
        console.log(field)
        //limpar 
        field.value = ""
    })

    //----------Colocar na página - Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    

    