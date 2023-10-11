let x = Math.floor(Math.random() * 100)
console.log(x);
let userGame = document.getElementById("game")
let userInput = document.getElementById("userInput")
let userCheck = document.getElementById("check")
let userTitle = document.getElementById("title")
let userScore = document.getElementById("userScore")
let userHighScore = document.getElementById("userHighScore")
let userLogo = document.getElementById("logo")
let userRangeFrom = document.getElementById("from")
let userRangeTo = document.getElementById("to")

let lifes = 5
let highScore = 0

userCheck.addEventListener("click", (evt) => {
    if (userInput.value.length > 2 || Number(userInput.value) < 0) {
        alert("Out of range")
    }

    else {

        if (userScore.textContent == 0) {
            userTitle.textContent = "Looser! " + "The number was " + x
            userInput.style.display = "none"
            userCheck.style.display = "none"
        }

        else if (userInput.value == x) {
            userTitle.innerHTML = null
            userTitle.textContent = "Winner! Winner! Chicken dinner!"
            userInput.disabled = true
            userCheck.disabled = true
            userCheck.style.display = "none"
            userHighScore.textContent = lifes
        }

        else if (x > userInput.value) {
            userTitle.innerHTML = "The number is more than your"
            lifes--
            userScore.textContent = lifes
            userRangeFrom.textContent = userInput.value

        }

        else if (x < userInput.value) {
            userTitle.innerHTML = "The number is lower than your"
            lifes--
            userScore.textContent = lifes
            userRangeTo.textContent = userInput.value
        }
    }
})