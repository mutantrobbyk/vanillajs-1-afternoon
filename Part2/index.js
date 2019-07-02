console.log('hello world')
let idInput = document.getElementById('idInput')
let setColor = document.getElementById('setColor')

function setCard() {
    const card = document.getElementById(idInput.value)
    console.log(card)
    card.style.color = setColor.value
}
function reloadPage() {
    window.location.reload()
}

