"use strict";
/*    JavaScript 7th Edition
      Exam 2

      Author: Thomas Wolf
      Date:   11/13/23

      Filename: countItUp.js
*/

// Waits for the DOM to be fully loaded before executing the script.
document.addEventListener("DOMContentLoaded", function() {
    let points = 1000; // Starting points for the player.
    let currentTotal = 0; // Current total score of the player's hand.
    
    // Retrieves elements from the DOM.
    const dealButton = document.getElementById("dealButton");
    const standButton = document.getElementById("standButton");
    const resetButton = document.getElementById("resetButton");
    const pointsDisplay = document.getElementById("points");
    const cardArea = document.getElementById("cardArea");

    // Initializes the game with default values.
    function initializeGame() {
        points = 1000; // Resets points to the starting value.
        currentTotal = 0; // Resets the current total score.
        pointsDisplay.textContent = points; // Updates the points display.
        cardArea.innerHTML = ''; // Clears the card area.
        // Additional game state resets can be added here if necessary.
    }

    // Creates a new card element and adds it to the DOM.
    function createCardElement(value, faceUp = false) {
        const card = document.createElement("span");
        card.className = "card";
        card.textContent = faceUp ? value : "X"; // Shows the card value or hides it.
        card.dataset.value = value; // Stores the card's value.

        // Adds a click event to flip the card face up.
        card.onclick = function() {
            if (!faceUp) {
                card.textContent = value; // Shows the card's value.
                currentTotal += getCardValue(value); // Updates the total score.
                document.getElementById("totalScore").textContent = currentTotal; // Updates the score display.
                checkGameOver(); // Checks if the game is over.
            }
        };
        return card;
    }

    // Calculates the numeric value of a card.
    function getCardValue(card) {
        if (['J', 'Q', 'K'].includes(card)) return 10; // Face cards are worth 10.
        if (card === 'A') return 11; // Ace is worth 11.
        return parseInt(card); // Numeric cards are worth their face value.
    }

    // Checks if the game is over based on the current total.
    function checkGameOver() {
        if (currentTotal > 25) {
            alert("Game Over! You lost."); // Alerts the player if they lost.
            points -= 50; // Deducts points for losing.
            pointsDisplay.textContent = points; // Updates the points display.
            enableDealButton(); // Enables the deal button for a new game.
        }
    }

    // Calculates and updates the player's points.
    function calculatePoints() {
        let score = 0;
        // Assigns points based on the player's total score.
        if (currentTotal === 25) score = 200;
        else if (currentTotal >= 23 && currentTotal <= 24) score = 150;
        else if (currentTotal >= 21 && currentTotal <= 22) score = 100;
        else if (currentTotal >= 19 && currentTotal <= 20) score = 50;
        else if (currentTotal >= 17 && currentTotal <= 18) score = 25;
        else score = -25;
        points += score; // Updates the total points.
        pointsDisplay.textContent = points; // Updates the points display.
    }

    // Enables the deal button and disables the stand button.
    function enableDealButton() {
        dealButton.disabled = false;
        standButton.disabled = true;
    }

    // Returns a random card from the deck.
    function getRandomCard() {
        const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const randomIndex = Math.floor(Math.random() * cards.length);
        return cards[randomIndex];
    }

    // Event listener for the deal button.
    dealButton.addEventListener("click", function() {
        cardArea.innerHTML = ''; // Clears the card area.
        // Deals four cards, with the first two face up.
        for (let i = 0; i < 4; i++) {
            let cardValue = getRandomCard();
            cardArea.appendChild(createCardElement(cardValue, i < 2));
        }
        // Calculates and displays the current total based on the first two cards.
        const cards = cardArea.children;
        currentTotal = getCardValue(cards[0].dataset.value) + getCardValue(cards[1].dataset.value);
        document.getElementById("totalScore").textContent = currentTotal; // Updates the total score display.
        this.disabled = true; // Disables the deal button.
        standButton.disabled = false;
    });
    
    standButton.addEventListener("click", function() {
        calculatePoints();
        enableDealButton();
    });

    resetButton.addEventListener("click", initializeGame);

    initializeGame();
});
