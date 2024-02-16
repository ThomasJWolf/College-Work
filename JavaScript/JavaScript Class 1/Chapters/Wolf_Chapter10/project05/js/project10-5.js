"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-05

    Crossword Puzzle Code for Keyboard Actions
    
      Author: Thomas Wolf
      Date:   10/30/23

    Filename: project10-05.js

*/


// Event handler to for keydown events within the current document
//FIX: Changed onkeypress to onkeydown
document.onkeydown = selectLetter;

// Function to apply keyboard actions to select a letter or navigate the puzzle
function selectLetter(e) {
   
   //FIX: Changed event to e
   e.preventDefault();
   
   // Reference the letter to the left of the current letter
   let leftLetter = document.getElementById(currentLetter.dataset.left);
   
   // Reference the letter above the current letter
   let upLetter = document.getElementById(currentLetter.dataset.up);
   
   // Reference the letter to the right of the current letter
   let rightLetter = document.getElementById(currentLetter.dataset.right); 
   
   // Reference the letter below the current letter
   let downLetter = document.getElementById(currentLetter.dataset.down); 
   
   // Get the key typed by the player
   //FIX: Changed e.code to e.key
   let userKey = e.key;
 
   if (userKey === "ArrowLeft") { // Move left
      //Invokes the formatPuzzle function for the left letter 
      formatPuzzle(leftLetter);  
      
   } else if (userKey === "ArrowUp") { // Move up
      //Invokes the formatPuzzle function for the above letter
      formatPuzzle(upLetter);  
      
   } else if (userKey === "ArrowRight" || userKey === "Tab") { // Move right
      //Invokes the formatPuzzle function for the right letter
      formatPuzzle(rightLetter);  
      
   } else if (userKey === "ArrowDown" || userKey === "Enter") { // Move down
      //Invokes the formatPuzzle function for the below letter
      formatPuzzle(downLetter);  
      
   } else if (userKey === "Backspace" || userKey === "Delete") { // Delete the character
      //Clears the content of the current letter element
      currentLetter.textContent = ""; 

   //FIX: Chaged "Space" to " "
   } else if (userKey === " ") { // Toggle the typing direction
      switchTypeDirection();  
      
   //Checks if a lowercase letter is pressed
   } else if (userKey >= "a" && userKey <= "z") { // Write the character
      //FIX: Removed .toUpperCase()
      currentLetter.textContent = userKey.toUpperCase(); 
      
      if (typeDirection === "right") {
         formatPuzzle(rightLetter);  // Move right after typing the letter
      } else {
         formatPuzzle(downLetter);  // Move down after typing the letter
      }
   }

}

