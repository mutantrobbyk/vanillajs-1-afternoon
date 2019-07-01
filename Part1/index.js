console.log('hello world')
const array = []
console.log(array)
function play(clickedId) {
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        array[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        array[clickedId] = 'O'
    }
    
    let topLeft = array[0]
    let topMiddle = array[1]
    let topRight = array[2]
    let middleLeft = array[3]
    let middleMiddle = array[4]
    let middleRight = array[5]
    let bottomLeft = array[6]
    let bottomMiddle = array[7]
    let bottomRight = array[8]
    let winner = ''
    if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
        winner = 'topLeft'
        alert(`${topLeft} wins!`)
    }
    if (middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight) {
        winner = 'middleLeft'
        alert(`${middleLeft} wins!`)
    }
    if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight){
        winner = 'bottomLeft'
        alert(`${bottomLeft} wins!`)
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        winner = 'topLeft'
        alert(`${topLeft} wins!`)
    }
    if (topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        winner = 'topMiddle'
        alert(`${topMiddle} wins!`)
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        winner = 'topRight'
        alert(`${topRight} wins!`)
    }
    if (topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight) {
        winner = 'topLeft'
        alert(`${topLeft} wins!`)
    }
    if (topRight !== undefined && topRight === middleMiddle && topRight === bottomLeft) {
        winner = 'topRight'
        alert(`${topRight} wins!`)
    }
    

    let boardFull = true
    for (let i = 0; i <= 8; i++) {
        if (array[i] === undefined){
            boardFull = false
        }
    }     
    if (boardFull === true && !winner){
    alert(`Cat's Game!`)
    }
   
}
    function reset () {
        for (let i = 0; i <= 8; i++) {
            if (restart = document.getElementById([i])) 
                restart.innerText = ``
            } 
        }
        

    
 
    
    