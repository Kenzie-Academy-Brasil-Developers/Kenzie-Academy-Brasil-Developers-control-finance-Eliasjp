const querySummnaryButtons = document.querySelectorAll(`.summaryButtonStyle`)

function callList(querySummnaryButtons){
querySummnaryButtons.forEach(buttons => {
    if (buttons.classList.contains(`summaryButtonSelected`)){
        if (buttons.innerHTML.toUpperCase() == `TODOS`){
            let queryAllLi = document.querySelectorAll(`.valueElement`)
            queryAllLi.forEach(li => {
                if (li.classList.contains(`valueEntry`) || li.classList.contains(`valueExit`)){
                    li.style.display = `inline`
                }
            })
            reduceValue (querySummnaryButtons)
        }else if (buttons.innerHTML.toUpperCase() == `ENTRADA`){
            let queryAllLi = document.querySelectorAll(`.valueElement`)
            queryAllLi.forEach(li => {
                if (!li.classList.contains(`valueEntry`)){
                    li.style.display = `none`
                }else {
                    li.style.display = `inline`
                }
            })
            reduceValue (querySummnaryButtons)
        }else if (buttons.innerHTML.toUpperCase() == `SAÍDA`){
            let queryAllLi = document.querySelectorAll(`.valueElement`)
            queryAllLi.forEach(li => {
                if (!li.classList.contains(`valueExit`)){
                    li.style.display = `none`   
                }else {
                    li.style.display = `inline`
                }
            })
            reduceValue (querySummnaryButtons)
        }
    }
})
}

function selectSummary (){
    let queryAllButtons = document.querySelectorAll(`.summaryButtonStyle`)
    queryAllButtons.forEach(element => {
        element.addEventListener(`click`, function (event){
            let tempArray = []
            event.target.classList.forEach(classes => {
                tempArray.push(classes)
            })
            if (!tempArray.includes(`summaryButtonSelected`)){
                queryAllButtons.forEach(rmvEvent => {
                    if (rmvEvent.classList.contains(`summaryButtonSelected`)){
                        rmvEvent.classList.remove(`summaryButtonSelected`)
                    }
                })
            event.target.classList.add(`summaryButtonSelected`)
            callList(querySummnaryButtons)
            }
        })
    })
}

selectSummary ()