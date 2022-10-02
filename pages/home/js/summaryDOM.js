function summaryAll (){
    let newButton = document.createElement(`button`)
        newButton.classList = `summaryAll summaryButtonStyle summaryButtonSelected`
        newButton.innerHTML = `Todos`

    let queryDiv = document.querySelector(`.summaryButtons`) 

    queryDiv.append(newButton)
}

function summaryEntry (){
    let newButton = document.createElement(`button`)
        newButton.classList = `summaryEntry summaryButtonStyle`
        newButton.innerHTML = `Entrada`

    let queryDiv = document.querySelector(`.summaryButtons`) 

    queryDiv.append(newButton)
}

function summaryExit (){
    let newButton = document.createElement(`button`)
        newButton.classList = `summaryExit summaryButtonStyle`
        newButton.innerHTML = `Saída`

    let queryDiv = document.querySelector(`.summaryButtons`) 

    queryDiv.append(newButton)
}

function createButtons (){
    summaryAll ()
    summaryEntry ()
    summaryExit ()
}

createButtons()