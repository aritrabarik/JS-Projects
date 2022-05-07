// Use getRandomCard() to set the values of firstCard and secondCard
// let firstCard = getRandomCard()
// let secondCard = getRandomCard()

// Create a new array - cards - that contains firstCard and secondCard
// let cards = [firstCard, secondCard] // Array - ordered list of items

// let sum = firstCard + secondCard

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")

// Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")

// Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

// Create a function, getRandomCard(), that always returns the number 5
// Make this function return a random number between 1 and 13
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumber = Math.floor(Math.random() * 13) + 1
    
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 1
    } else {
        return randomNumber
    }
}

// Create a new function called startGame () that calls renderGame ()
function startGame() {
    // Generate two random numbes
    // Re-assign the cards and sum variables so that the game can start
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    // Render the cars on the page using this format -> "Cards: 10 4"
    // Render out firstCard and secondCard
    //cardsEl.textContent = "Cards: " + firstCard + " " + secondCard

    // Render out ALL the cards we have
    // Refer to the cards array when rendering out the cards
    //cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]

    cardsEl.textContent = "Cards: " 

    // Create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }


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
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        // Use the getRandomCard() to set the value of card
        let card = getRandomCard()

        //console.log("Drawing a new card from the deck!")

        // Create a card variable, and hard code its value to a number (2-11)
        //let card = 7
        
        // Add the new card to the sum variable
        sum += card

        // Push the card to the cards array
        cards.push(card)

        // Call startGame()
        renderGame()
    }
}