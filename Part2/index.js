console.log('hello world')
let idInput = document.getElementById('idInput')
let setColor = document.getElementById('setColor')

function setCard() {
    const card = document.getElementById(idInput.value)
    console.log(card)
    card.style.color = setColor.value
}
function reloadPage() {
    const heart = document.getElementById('hearts')
    const diamond = document.getElementById('diamonds')
    const club = document.getElementById('clubs')
    const spade = document.getElementById('spades')
    heart.style.removeProperty('color')
    diamond.style.removeProperty('color')
    club.style.removeProperty('color')
    spade.style.removeProperty('color')
}

