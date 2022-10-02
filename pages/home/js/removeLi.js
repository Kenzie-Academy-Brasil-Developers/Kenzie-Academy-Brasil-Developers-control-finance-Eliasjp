function removeLi (){
    const allTrashButton = document.querySelectorAll(`.trashButton`)
    allTrashButton.forEach(e => {
        const secLiDetails = e.parentNode
        const liValue = e.parentNode.parentNode.parentNode
        const liId = parseInt(liValue.id.slice(4))
        const liCheckType = secLiDetails.childNodes[0].childNodes[0].innerHTML.toUpperCase()
        e.addEventListener(`click`, () => {
            if (liCheckType == `ENTRADA`){
                const value = parseInt(liValue.childNodes[0].childNodes[0].innerHTML.slice(3))
                const searchValue = entryValue.indexOf(value)
                entryValue.shift(entryValue[searchValue])
                insertedValues.forEach(obj => {
                    if (obj.id == liId){
                        insertedValues.shift(obj)
                        checkIndex--
                    }
                })
                insertedValuesEntry.forEach(obj => {
                    if (obj.id == liId){
                        insertedValuesEntry.shift(obj)
                    }
                })
                allValue.forEach(obj => {
                    if (obj == value){
                        return allValue.shift(allValue.indexOf(obj))
                    }
                })
                liValue.remove()
            }else if (liCheckType == `SAÍDA`){
                const value = parseInt(liValue.childNodes[0].childNodes[0].innerHTML.slice(3))
                const searchValue = exitValue.indexOf(value)
                exitValue.shift(exitValue[searchValue])
                insertedValues.forEach(obj => {
                    if (obj.id == liId){
                        insertedValues.shift(obj)
                        checkIndex--
                    }
                })
                insertedValuesExit.forEach(obj => {
                    if (obj.id == liId){
                        insertedValuesExit.shift(obj)
                    }
                })
                allValue.forEach(obj => {
                    if (obj == value){
                        return allValue.shift(allValue.indexOf(obj))
                    }
                })
                liValue.remove()
            }
            reduceValue (querySummnaryButtons)
        })
    })
}
