"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-05

    Crossword Puzzle Functions
    
      Author: Thomas Wolf
      Date:   10/30/23  

    Filename: cross.js

   Global Variables
   ================
   allLetters
      References all of the letter squares in the crossword puzzle
   
   currentLetter
      References the letter currently selected in the crossword puzzle
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle square
      
      
   switchTypeDirection()
      Toggles the typing direction between right and down     

*/

//Declares the global variables
let allLetters, currentLetter, wordLetters, acrossClue, downClue;

//Sets the initial typing direction to right
let typeDirection = "right";

//Assigns the init function to window's onload event
window.onload = init;

function init() {
   //Gets all the letter squares in the crossword
   allLetters = document.querySelectorAll("table#crossword span");
   
   //Sets the current letter to the first letter square
   currentLetter = allLetters[0];
   
   //Retrieves the across clue ID associated with the current letter
   let acrossID = currentLetter.dataset.clueA;
   
   //Retrieves the down clue ID associated with the current letter
   let downID = currentLetter.dataset.clueD;
   
   //References the across clue associated with the current letter
   acrossClue = document.getElementById(currentLetter.dataset.clueA);
   
   //References the down clue associated with the current letter
   downClue = document.getElementById(currentLetter.dataset.clueD);
   

   // Format the intial appearance of the puzzle to highlight the
   // first row, column, and square
   formatPuzzle(currentLetter);
   
   // Every time the pointer presses down on a letter, reformat the puzzle
   // to highlight the current row, column, and square
   for (let letters of allLetters) {     
      letters.onpointerdown = function(e) {
         formatPuzzle(e.target);
      };
   }
   
   // typeImage shows the typing direction (horizontal or vertical)
   let typeImage = document.getElementById("directionImg");
   
   // Toggle the typing direction when the pointer presses down on the typeImage
   typeImage.onpointerdown = switchTypeDirection;
   
   // Show all errors in the puzzle in red but only for 1 second
   document.getElementById("showErrors").onclick = function() {
      
      //Iterates over all letter squares
      for (let letters of allLetters) {
         
         //Checks if a square's letter doesn't match the expected letter
         if (letters.textContent !== letters.dataset.letter) {
            
            //Sets the incorrect letter's color to red
            letters.style.color = "red"; 
            //Sets a timeout for 1 second
            setTimeout(function() {
               //Iterates over all letter squares
               for (let letters of allLetters) {
                  //Resets the letter's color
                  letters.style.color = ""; 
               }
            //End of timeout duration
            }, 1000); 
         }
      }
   };
   
   // Show the puzzle's solution
   document.getElementById("showSolution").onclick = function() {
      for (let letters of allLetters) {
         letters.textContent = letters.dataset.letter;
      }
   };
}

function formatPuzzle(puzzleLetter) {
   //Updates the current letter
   currentLetter = puzzleLetter; 
   //Iterates over all letter squares
   for (let letters of allLetters) {

      //Resets the background color of each square
      letters.style.backgroundColor = ""; 
   }
   
   //Resets the across clue's color
   acrossClue.style.color = "";

   //Resets the down clue's color
   downClue.style.color = "";
     
   //Checks if there's an across clue associated with the current letter
   if (currentLetter.dataset.clueA !== undefined) {
      //References the across clue
      acrossClue = document.getElementById(currentLetter.dataset.clueA); 
      //Sets the across clue's color to blue
      acrossClue.style.color = "blue"; 
      //Gets all letters associated with the across clue
      wordLetters = document.querySelectorAll("[data-clue-a = " + currentLetter.dataset.clueA + "]");
      //Iterates over the retrieved letters
      
      for (let words of wordLetters) {
         //Sets their background color to light blue
         words.style.backgroundColor = "rgb(231, 231, 255)"; 
      }
   }
   
   //Checks if there's a down clue associated with the current letter
   if (currentLetter.dataset.clueD !== undefined) {
      //References the down clue
      downClue = document.getElementById(currentLetter.dataset.clueD); 
      //Sets the down clue's color to red
      downClue.style.color = "red"; 
      //Gets all letters associated with the down clue
      wordLetters = document.querySelectorAll("[data-clue-d = " + currentLetter.dataset.clueD + "]");
      
      //Iterates over the retrieved letters
      for (let words of wordLetters) {
         //Sets their background color to light red
         words.style.backgroundColor = "rgb(255, 231, 231)";
      }
   }
   
   //Checks if the typing direction is right
   if (typeDirection === "right") {
      //Sets the current letter's background color to blue
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)"; 
   } else { 
      //Sets the current letter's background color to red
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
   }
}

function switchTypeDirection() {
   //Gets the image element indicating typing direction
   var typeImage = document.getElementById("directionImg"); 
   //Checks if the typing direction is right
   if (typeDirection === "right") {
      //Sets the typing direction to down
      typeDirection = "down"; 
      //Updates the direction image to a down arrow
      typeImage.src = "images/pc_down.png"; 
      //Sets the current letter's background color to red
      currentLetter.style.backgroundColor = "rgb(255, 191, 191)"; 
   } else { 
      //Sets the typing direction to right
      typeDirection = "right"; 
      //Updates the direction image to a right arrow
      typeImage.src = "images/pc_right.png"; 
      //Sets the current letter's background color to blue
      currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
   }   
}