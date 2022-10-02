function addNewValue (){
    let queryButton = document.querySelector(`.newValue`)

    queryButton.addEventListener(`click`, function (e){
        modalNewValue ()
        exitModal ()
        sendNewValue ()
    })
}

function modalNewValue (){
    let divBackground = document.createElement(`div`)
        divBackground.classList = `modalBg`

    let divModal = document.createElement(`div`)
        divModal.classList = `modalDiv`

    let queryBody = document.querySelector(`body`)
    
    queryBody.append(divBackground)
    divBackground.append(divModal)

    createHeaderModal ()
    createDescriptionModal ()
    createFormModal ()
    createSectionsModal ()
    createValueModal ()
    createTypeInput ()
    createCancelSend ()
}

function createHeaderModal (){
    let headerModal = document.createElement(`header`)
        headerModal.classList = `modalHeader`

    let h2Modal = document.createElement(`h2`)
        h2Modal.innerHTML = `Registro de valor`

    let closeModal = document.createElement(`button`)
        closeModal.classList = `closeModal`
        closeModal.innerHTML = `X`

    let queryDivModal = document.querySelector(`.modalDiv`)

    queryDivModal.append(headerModal)
    headerModal.append(h2Modal, closeModal)
}

function createDescriptionModal (){
    let descriptionModal = document.createElement(`p`)
        descriptionModal.classList = `descriptionModal`
        descriptionModal.innerHTML = `Digite o valor e em seguida aperte o botão referente ao tipo do valor`

    let queryDivModal = document.querySelector(`.modalDiv`)

    queryDivModal.append(descriptionModal)
}

function createFormModal (){
    let form = document.createElement(`form`)
        form.classList = `newValueForm`
        form.id = `newValueForm`

    let queryDivModal = document.querySelector(`.modalDiv`)

    queryDivModal.append(form)
}

function createSectionsModal (){
    let sectionValue = document.createElement(`section`)
        sectionValue.classList = `valueSection`

    let sectionType = document.createElement(`section`)
        sectionType.classList = `typeSection`

    let sectionCancelSend = document.createElement(`section`)
        sectionCancelSend.classList = `cancelSend`

    let queryForm = document.querySelector(`.newValueForm`)

    queryForm.append(sectionValue, sectionType, sectionCancelSend)
}

function createValueModal (){
    let labelValue = document.createElement(`label`)
        labelValue.classList = `valueLabel`
        labelValue.innerHTML = `Valor`

    let inputValue = document.createElement(`input`)
        inputValue.classList = `valueInput`
        inputValue.placeholder = `R$: 00,00`
        inputValue.name = `Valor`
        inputValue.type = `number`
        inputValue.required = `required`

    let querySection = document.querySelector(`.valueSection`)

    querySection.append(labelValue, inputValue)
}

function createTypeInput (){
    let querySection = document.querySelector(`.typeSection`)

    let pType = document.createElement(`p`)
        pType.classList = `typeP`
        pType.innerHTML = `Tipo do valor`
    
    let typeInputEntry = document.createElement(`Input`)
        typeInputEntry.classList = `radioInput entryInput`
        typeInputEntry.id = `entryInput`
        typeInputEntry.type = `radio`
        typeInputEntry.value = `Entrada`
        typeInputEntry.name = `newValueType`

    let typeLabelEntry = document.createElement(`label`)
        typeLabelEntry.classList = `entryLabel typeLabel`
        typeLabelEntry.innerHTML = `Entrada`
        typeLabelEntry.htmlFor = `entryInput`

    let typeInputExit = document.createElement(`input`)
        typeInputExit.classList = `radioInput exitInput`
        typeInputExit.id = `exitInput`
        typeInputExit.type = `radio`
        typeInputExit.value = `Saída`
        typeInputExit.name = `newValueType`

    let typeLabelExit = document.createElement(`label`)
        typeLabelExit.classList = `exitLabel typeLabel`
        typeLabelExit.innerHTML = `Saída`
        typeLabelExit.htmlFor = `exitInput`

    querySection.append(pType, typeInputEntry, typeLabelEntry, typeInputExit, typeLabelExit)
}

function createCancelSend (){
    let cancelButton = document.createElement(`button`)
        cancelButton.classList = `cancelButton`
        cancelButton.innerHTML = `Cancelar`

    let sendButton = document.createElement(`button`)
        sendButton.classList = `sendButton purpleButtonStyle`
        sendButton.form = `newValueForm`
        sendButton.innerHTML = `Inserir valor`

    let querySection = document.querySelector(`.cancelSend`)
    
    querySection.append(cancelButton, sendButton)
}

function exitModal (){
    let queryButtonX = document.querySelector(`.closeModal`)
    let queryButtonCancel = document.querySelector(`.cancelButton`)

    queryButtonX.addEventListener(`click`, function (e){
        e.preventDefault()
        let queryModalBg = document.querySelector(`.modalBg`)
        
        queryModalBg.remove()
    })

    queryButtonCancel.addEventListener(`click`, function (e){
        e.preventDefault()
        let queryModalBg = document.querySelector(`.modalBg`)
            
        queryModalBg.remove()
    })
}

addNewValue ()