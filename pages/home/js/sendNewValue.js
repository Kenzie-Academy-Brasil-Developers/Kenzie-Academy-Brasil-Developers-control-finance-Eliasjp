function sendNewValue (){
    let queryButton = document.querySelector(`.sendButton`)
    let queryModalBg = document.querySelector(`.modalBg`)

    queryButton.addEventListener(`click`, (e) => {
        e.preventDefault()
        valuesArray ()
        checkIndex++
        removeLi ()
        callList(querySummnaryButtons)
        queryModalBg.remove()
    })
}

function valuesArray (){
    let queryInputValue = document.querySelector(`.valueInput`)
    let queryTypeInputEntry = document.querySelector(`.entryInput`)
    let queryTypeInputExit = document.querySelector(`.exitInput`)
    if (queryTypeInputEntry.checked){
        if (queryInputValue.value){
            idCount++
            let objectEntry = {
                                id: idCount,
                                value: queryInputValue.value,
                                category: queryTypeInputEntry.value
                            }
            insertedValues.push(objectEntry)
            insertedValuesEntry.push(objectEntry)
            allValue.push(parseInt(objectEntry.value))
            entryValue.push(parseInt(objectEntry.value))
            reduceValue (querySummnaryButtons)
            return createLiEntry (checkIndex)
        }
    }else if (queryTypeInputExit.checked){
        if (queryInputValue.value){
            idCount++
            let objectExit = {
                                id: idCount,
                                value: queryInputValue.value,
                                category: queryTypeInputExit.value
                            }
            insertedValues.push(objectExit)
            insertedValuesExit.push(objectExit)
            allValue.push(parseInt(objectExit.value))
            exitValue.push(parseInt(objectExit.value))
            reduceValue (querySummnaryButtons)
            return createLiExit (checkIndex)
        }
    }
}

function createLiEntry (checkIndex){

        let li = document.createElement(`li`)
            li.classList = `valueElement valueEntry`
            li.id = `data${idCount}`
    
        let containerLi = document.createElement(`div`)
            containerLi.classList = `containerLi`
    
        let liValue = document.createElement(`p`)
            liValue.innerHTML = `R$: ${parseInt(insertedValues[checkIndex].value).toFixed(2)}`

        let sectionDetails = document.createElement(`section`)
            sectionDetails.classList = `liDetails`

        let divShowType = document.createElement(`div`)
            divShowType.classList = `divType`

        let pType = document.createElement(`p`)
            pType.innerHTML = `${insertedValues[checkIndex].category}`

        let trashButton = document.createElement(`button`)
            trashButton.classList = `trashButton`
            
        let imgTrashButton = document.createElement(`img`)
            imgTrashButton.classList = `imgTrashButton`
            imgTrashButton.src = `assets/trash.svg`

        let ul = document.querySelector(`.valueList`)

        ul.append(li)
        li.append(containerLi)
        containerLi.append(liValue, sectionDetails)
        sectionDetails.append(divShowType, trashButton)
        divShowType.append(pType)
        trashButton.append(imgTrashButton)
}

function createLiExit (){

        let li = document.createElement(`li`)
            li.classList = `valueElement valueExit`
            li.id = `data${idCount}`
    
        let containerLi = document.createElement(`div`)
            containerLi.classList = `containerLi`
    
        let liValue = document.createElement(`p`)
            liValue.innerHTML = `R$: ${parseInt(insertedValues[checkIndex].value).toFixed(2)}`

        let sectionDetails = document.createElement(`section`)
            sectionDetails.classList = `liDetails`

        let divShowType = document.createElement(`div`)
            divShowType.classList = `divType`

        let pType = document.createElement(`p`)
            pType.innerHTML = `${insertedValues[checkIndex].category}`

        let trashButton = document.createElement(`button`)
            trashButton.classList = `trashButton`
            
        let imgTrashButton = document.createElement(`img`)
            imgTrashButton.classList = `imgTrashButton`
            imgTrashButton.src = `../assets/trash.svg`

        let ul = document.querySelector(`.valueList`)

        ul.append(li)
        li.append(containerLi)
        containerLi.append(liValue, sectionDetails)
        sectionDetails.append(divShowType, trashButton)
        divShowType.append(pType)
        trashButton.append(imgTrashButton)
}