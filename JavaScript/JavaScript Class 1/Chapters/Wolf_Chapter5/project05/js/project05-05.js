"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-05

      Project to create a Concentration game with flipping tiles
      Author: Thomas Wolf
      Date:   9/18/23

      Filename: project05-05.js
*/

// Reference to the game board
let board = document.getElementById("board");

// Reference to the tiles within the game board
let allTiles = document.getElementsByClassName("tile");

// Objects that will reference the first and second tile clicked by the player
let firstFlipped;
let secondFlipped;

// Variable containing the id of a timed command
let timeID;

// Counter of the number of tiles currently flipped
let tilesFlipped = 0;

// Functions to run when the page is loaded
window.addEventListener("load", scrambleTiles);
window.addEventListener("load", playConcentration);

// Function that scrambles the order of the tiles within the board
function scrambleTiles() {
   for (let i = 0; i < allTiles.length; i++) {

      // Random index integer from 0 to the number of tiles minus 1
      let randomIndex = Math.floor(allTiles.length * Math.random());

      // Randomly insert a tile before the current tile in the loop
      board.insertBefore(board.children[randomIndex], board.children[i]);
   }
}

// Function that sets up the game play
function playConcentration() {
   // Create event handlers for all tiles in the game board
   for (let i = 0; i < allTiles.length; i++) {
      allTiles[i].addEventListener("click", flipTile);
   }
}

// Function to flip the two tiles if they don't match
function flipTile() {
   // Test to see if the back of the tile is displayed
   if (this.lastElementChild.className === "back") {

      tilesFlipped++;  // increase the flip count by 1

      if (tilesFlipped === 1) {
         // if this is the first tile clicked then flip it
         firstFlipped = this;
         firstFlipped.insertBefore(firstFlipped.lastElementChild, firstFlipped.firstElementChild);
      } else if (tilesFlipped === 2) {
         // if this is the second tile clicked then flip it
         // and then flip both tiles back after 1 second
         secondFlipped = this;
         secondFlipped.insertBefore(secondFlipped.lastElementChild, secondFlipped.firstElementChild);
         timeID = window.setTimeout(flipBack, 1000);
      }
   }
}

// Function to flip the tiles back if they don't match
function flipBack() {
   // test to determine whether the tile images don't match
   if (firstFlipped.lastElementChild.src !== secondFlipped.lastElementChild.src) {

      // if they don't match, then flip each one
      firstFlipped.insertBefore(firstFlipped.lastElementChild, firstFlipped.firstElementChild);
      secondFlipped.insertBefore(secondFlipped.lastElementChild, secondFlipped.firstElementChild);
   }

   // Reset the tiles flipped counter to zero
   tilesFlipped = 0;
}
