"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: Thomas Wolf
      Date:   10/23/23

      Filename: project09-04.js
*/

/* Page Objects */
//Gets the elements with class name "block"
let blocks = document.getElementsByClassName("block");
//Gets the element with id "timer"
let timer = document.getElementById("timer");
//Gets the element with id "slidingBlocks"
let blockContainer = document.getElementById("slidingBlocks");

// Customized JavaScript event that will fire when the puzzle is solved
let event = new CustomEvent("puzzleSolved");
let timerID;

// Event listener to load the puzzle interface
window.addEventListener("load", init);


// Function to set up the puzzle
function init() {
   // Add event handlers to every block in puzzle
   for (let items of blocks) {
      items.onclick = swapWithBlank;
   }

   // Event listener for the Start button
   document.getElementById("Start").addEventListener("click", startGame);

   // Function to scramble the order of the puzzle blocks
   function startGame() {
      //Resets the timer value  
      timer.value = 0;
      //Gets a scrambled order of integers
      let scrambledOrder = scrambleIntegers(8);

      for (let i = 1; i <= 8; i++) {
         //Gets the current block
         let currentBlock = blockContainer.children[i - 1];
         //Sets the id for the current block
         currentBlock.id = "images/block" + scrambledOrder[i - 1];
         //Sets the image source for the current block
         currentBlock.firstElementChild.src = "images/block" + scrambledOrder[i - 1] + ".jpg";
         //Sets the alt text for the image of the current block
         currentBlock.firstElementChild.alt = scrambledOrder[i];
      }

      // Start the timer when the Start button is clicked
      timerID = window.setInterval(runTimer, 1000);
      function runTimer() {
         timer.value++;
      }
   }
}


// Function that swaps a clicked block if it is a adjacent to the blank space
function swapWithBlank(e) {
   let blankCheck, rowCheck, colCheck, qs;
   //Gets the parent element of the clicked block
   let activeBlock = e.target.parentElement;

   let rowNum = parseInt(activeBlock.classList[1].charAt(1));
   let colNum = parseInt(activeBlock.classList[2].charAt(1));

   // Check preceding column for blank
   if (colNum > 1) {
      blankCheck = activeBlock.previousElementSibling;
      if (blankCheck.id === "block0") {
         //Swaps the blocks
         swap(activeBlock, blankCheck);
         //Checks if the board is solved
         checkBoard();
         return;
      }
   }
   // Check next column for blank
   if (colNum < 3) {
      //Checks the next element
      blankCheck = activeBlock.nextElementSibling;
      if (blankCheck.id === "block0") {
         //Swaps the blocks
         swap(activeBlock, blankCheck);
         return;
      }
   }
   // Check preceding row for blank
   if (rowNum > 1) {
      blankCheck = activeBlock.previousElementSibling.previousElementSibling.previousElementSibling;
      if (blankCheck.id === "block0") {
         //Swaps the blocks
         swap(activeBlock, blankCheck);
         //Checks if the board is solved
         checkBoard();
         return;
      }
   }

   // Check next row for blank
   if (rowNum < 3) {
      blankCheck = activeBlock.nextElementSibling.nextElementSibling.nextElementSibling;
      if (blankCheck.id === "block0") {
         //Swaps the blocks
         swap(activeBlock, blankCheck);
         //Checks if the board is solved
         checkBoard();
         return;
      }
   }


   function swap(block, blank) {
      //Holds the class name of the blank
      let holdClass = blank.className;
      //Swaps class names
      blank.className = block.className;
      //Sets the held class name to the block
      block.className = holdClass;

      //Clones the block
      let clonedBlock = block.cloneNode(true);
      //Assigns the click event to the clone
      clonedBlock.onclick = swapWithBlank;
      //Clones the blank
      let clonedBlank = blank.cloneNode(true);

      //Replaces the blank with the cloned block
      blank.parentNode.replaceChild(clonedBlock, blank);
      //Replaces the block with the cloned blank  
      block.parentNode.replaceChild(clonedBlank, block);
   }

   // Function that checks whether the puzzle has been solved
   function checkBoard() {
      //Assumes the puzzle is solved
      let solved = true;
      for (let i = 1; i <= 8; i++) {
         if (blockContainer.children[i - 1].id !== "images/block" + i) {
            //If any block is out of order, sets solved to false
            solved = false;
            break;
         }
      }

      if (solved) {
         //Stops the timer
         clearInterval(timerID);
         //Alerts the user
         window.alert("Solved!!");
         // If the puzzle has been solved, initiate the puzzleSolved event
         window.dispatchEvent(event);
      }
   }
}


// Function to randomly order the integers from 1 to 8 while maintaining parity required for the puzzle solution
function scrambleIntegers(size) {
   //Creates a new array of given size
   let x = new Array(size);
   //Fills the array with consecutive integers
   for (let i = 0; i < x.length; i++) { x[i] = i + 1; }
   //Sorts the array randomly
   x.sort(randOrder);

   //Initializes the sum
   let nSum = 0;

   for (let i = 0; i < x.length; i++) {
      //Calculates the number of inversions
      for (let j = i; j < x.length; j++) { if (x[j] < x[i]) nSum++; }
   }

   if (Math.floor(nSum / 2) != nSum / 2) {
      // puzzle is not solveable - make one more swap of values
      let temp;
      let needSwap = true;
      for (let i = 0; (i < x.length) && needSwap; i++) {
         for (var j = i; j < x.length && needSwap; j++) {
            if (x[j] > x[i]) { temp = x[j]; x[j] = x[i]; x[i] = temp; needSwap = false; }
         }
      }
   }
   return x;

   function randOrder() {
      //Generates a random order for sorting
      return 0.5 - Math.random();
   }
}
