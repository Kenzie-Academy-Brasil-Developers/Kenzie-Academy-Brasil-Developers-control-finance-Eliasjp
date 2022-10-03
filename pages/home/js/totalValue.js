function createTotalValue (){
    let totalValue = document.createElement(`p`)
        totalValue.classList = `reducedValue`
        totalValue.innerHTML = `R$: 00.00`

    let querySection = document.querySelector(`.totalValue`)
    
    querySection.append(totalValue)
}

function reduceValue (querySummnaryButtons){
    querySummnaryButtons.forEach(element => {
        if (element.classList.contains(`summaryButtonSelected`)){
            const queryTotalValue = document.querySelector(`.reducedValue`)
            if (element.innerHTML.toUpperCase() == `TODOS`){
                if (entryValue.length && exitValue.length){
                    let entryMinusExit = entryValue.reduce((total, value) => total + value) - exitValue.reduce((total, value) => total + value)
                    queryTotalValue.innerHTML = `R$: ${entryMinusExit.toFixed(2)}`
                }
                if (entryValue.length && !exitValue.length){
                    queryTotalValue.innerHTML = `R$: ${entryValue.reduce((total, value) => total + value).toFixed(2)}`
                }else if (exitValue.length && !entryValue.length){
                    queryTotalValue.innerHTML = `R$: ${exitValue.reduce((total, value) => total + value).toFixed(2)}`
                }else if (!allValue.length){
                    queryTotalValue.innerHTML = `R$: 00.00`
                }
            }else if (element.innerHTML.toUpperCase() == `ENTRADA`){
                if (entryValue.length){
                    queryTotalValue.innerHTML = `R$: ${entryValue.reduce((total, value) => total + value).toFixed(2)}`
                }else if (!entryValue.length){
                    queryTotalValue.innerHTML = `R$: 00.00`
                }
            }else if (element.innerHTML.toUpperCase() == `SAÍDA`){
                if (exitValue.length){
                    queryTotalValue.innerHTML = `R$: ${exitValue.reduce((total, value) => total + value).toFixed(2)}`
                }else if (!exitValue.length){
                    queryTotalValue.innerHTML = `R$: 00.00`
                }
            }
        }
    })
}

createTotalValue ()