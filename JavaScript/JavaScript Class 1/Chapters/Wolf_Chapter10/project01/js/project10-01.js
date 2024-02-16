"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: 
      Date:   

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   //Creates a new image element
   let piece = document.createElement("img");
   //Sets the image source based on intList values
   piece.src = "images/piece" + intList[i] + ".png";
   //Calculates the row number for positioning
   let rowNum = Math.ceil((i+1)/8);
   //Calculates the column number for positioning
   let colNum = (i + 1) - (rowNum - 1)*8;
   //Sets the top position of the piece based on its row
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   //Sets the left position of the piece based on its column
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   //Sets the image as not draggable
   piece.draggable = false; // override the default draggability of images
   //Appends the piece to the puzzle board
   puzzleBoard.appendChild(piece);      
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

//Adds pointerdown event listeners to each puzzle piece
for (let items of pieces) {
   //Adds pointerdown event listener which triggers grabPiece function
   items.addEventListener("pointerdown", grabPiece);
}

//Defines the function that runs when a piece is grabbed
function grabPiece(e) {
   //Gets the x-coordinate of the pointer
   pointerX = e.clientX;
   //Gets the y-coordinate of the pointer
   pointerY = e.clientY;
   //Prevents touch actions on the target
   e.target.style.touchAction = "none";      
   //Increments the zCounter to bring piece to front
   zCounter++;
   //Sets the z-index of the target based on zCounter
   e.target.style.zIndex = zCounter;   

   //Gets the left offset of the target piece
   pieceX = e.target.offsetLeft;
   //Gets the top offset of the target piece
   pieceY = e.target.offsetTop;

   //Adds pointermove event listener which triggers movePiece function
   e.target.addEventListener("pointermove", movePiece);
   //Adds pointerup event listener which triggers dropPiece function
   e.target.addEventListener("pointerup", dropPiece);
} 

//Defines the function that runs when a piece is moved
function movePiece(e) {
   //Calculates the x-coordinate difference between current and initial positions
   let diffX = e.clientX - pointerX;
   //Calculates the y-coordinate difference between current and initial positions
   let diffY = e.clientY - pointerY;

   //Sets the left position of the target based on the calculated difference
   e.target.style.left = pieceX + diffX + "px";
   //Sets the top position of the target based on the calculated difference
   e.target.style.top = pieceY + diffY + "px";
} 

//Defines the function that runs when a piece is dropped
function dropPiece(e) {
   //Removes the pointermove event listener from the target
   e.target.removeEventListener("pointermove", movePiece);
   //Removes the pointerup event listener from the target
   e.target.removeEventListener("pointerup", dropPiece);
}
