// procurar o botão
document.querySelector("#add-time")
// quando clicar no botão
.addEventListener('click', cloneField)


// executar uma acao
function cloneField() {
    // Duplicar os campos que campo?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // colocar na página
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function(field) {
        field.value = ""
    })
    
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

