"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-02

      Project to deal cards from a shuffled poker deck
      Author: Thomas
      Date:   10/9/23

      Filename: project07-02.js
*/

//A string representing a deck of cards
let deckStr = `Ace of Hearts, King of Hearts, Queeen of Hearts, Jack of Hearts,
               10 of Hearts, 9 of Hearts, 8 of Hearts, 7 of Hearts, 6 of Hearts,
               5 of Hearts, 4 of Hearts, 3 of Hearts, 2 of Hearts,
               Ace of Spades, King of Spades, Queeen of Spades, Jack of Spades,
               10 of Spades, 9 of Spades, 8 of Spades, 7 of Spades, 6 of Spades,
               5 of Spades, 4 of Spades, 3 of Spades, 2 of Spades,
               Ace of Diamonds, King of Diamonds, Queeen of Diamonds, Jack of Diamonds,
               10 of Diamonds, 9 of Diamonds, 8 of Diamonds, 7 of Diamonds, 6 of Diamonds,
               5 of Diamonds, 4 of Diamonds, 3 of Diamonds, 2 of Diamonds, 
               Ace of Clubs, King of Clubs, Queeen of Clubs, Jack of Clubs,
               10 of Clubs, 9 of Clubs, 8 of Clubs, 7 of Clubs, 6 of Clubs,
               5 of Clubs, 4 of Clubs, 3 of Clubs, 2 of Clubs`;

//Selects all the span elements within the div with ID 'hand'
let cards = document.querySelectorAll("div#hand span");

//Gets the 'cardsLeft' element by its ID
let cardsLeft = document.getElementById("cardsLeft");

//Initializes an empty array for the deck
let deck = [];

//Adds an onclick event to the 'deal' button
document.getElementById("deal").onclick = function () {

   //A Function to create a new deck of cards
   function newDeck() {
      //Splits the deckStr by commas to create an array of cards
      deck = deckStr.split(/,/g);

      //Shuffles the deck of cards
      deck.sort(shuffle);

      //Shuffles function using Math.random()
      function shuffle(a, b) {
         return 0.5 - Math.random();
      }
   }

   //Loops through each card element
   for (let i = 0; i < cards.length; i++) {
      //If the deck is empty, create a new one
      if (deck.length === 0) {
         newDeck();
      }

      //Sets the text of the card element to the top card of the deck
      cards[i].textContent = deck.pop();

      //Updates the number of cards left in the deck
      cardsLeft.textContent = deck.length;
   }
}



