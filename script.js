const char = document.getElementById("char")
const block = document.getElementById("block")
const layer = document.getElementById("layer")
const buttonStart = document.getElementById("buttonStart")
const buttonReset = document.getElementById("buttonReset")
const note1 = document.getElementById("note1")
const note2 = document.getElementById("note2")
const finalScore = document.getElementById("finalScore")
const countDown = document.getElementById("countDown")
let num = -3

function start() {
    countDown.style.display = "inline-block"
    buttonStart.style.display = "none"
    note1.style.display = "none"
    note2.style.display = "none"

    const initiate = setInterval(function () {
        countDown.innerHTML = `<h2>${num * -1}</h2>`
        num++
    }, 1000)


    const delayStart = setTimeout(function () {
        block.style.animation = "block 2s infinite linear"
        layer.style.backgroundColor = "rgba(0, 0, 0, 0)"
        countDown.style.display = "none"
    }, 4000)
}

function reload() {
    location.reload()
}

function jump() {
    if (char.classList != "jump") {
        char.classList.add("jump")
    }
    setTimeout(function () {
        char.classList.remove("jump")
    }, 1000)
}

const checkHit = setInterval(function () {
    let charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"))
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    if (blockLeft < 265 && blockLeft > 25 && charTop >= 200) {
        block.style.animation = "none"
        block.style.display = "none"
        layer.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        buttonReset.style.display = "inline-block"
        finalScore.style.display = "inline-block"
        let final = Math.floor(num / 2) - 1
        finalScore.innerHTML += `<h2>${final}<h2>`
    }
}, 10);