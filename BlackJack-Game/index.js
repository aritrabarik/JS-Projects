let firstCard = 10
let secondCard = 4

// Create a new array - cards - that contains firstCard and secondCard
let cards = [firstCard, secondCard] // Array - ordered list of items

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

// Create a new function called startGame () that calls renderGame ()
function startGame() {
    renderGame()
}

function renderGame() {
    // Render the cars on the page using this format -> "Cards: 10 4"
    // Render out firstCard and secondCard
    //cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

    // Render out ALL the cards we have
    // Refer to the cards array when rendering out the cards
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

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

// Create a function newCard() that logs out "Drawing a new card from the deck!"

function newCard() {
    console.log("Drawing a new card from the deck!")

    // Create a card variable, and hard code its value to a number (2-11)
    let newCard = 7
    
    // Add the new card to the sum variable
    sum += newCard

    // Call startGame()
    renderGame()
}