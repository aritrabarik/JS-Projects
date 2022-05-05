let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")

// Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")

// Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

function startGame() {
    // Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

    // Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    // Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message    
}