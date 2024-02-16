"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop
    
      Author: Thomas Wolf
      Date:   10/30/23 

    Filename: project10-04.js
*/


// Page Objects

//Gets the collection of all span elements
let pieces = document.getElementsByTagName("span");
//Gets all td elements inside a table with the ID "chessboard"
let boardSquares = document.querySelectorAll("table#chessboard td");
//Gets the element with the ID "whiteBox"
let whiteBox = document.getElementById("whiteBox");
//Gets the element with the ID "blackBox"
let blackBox = document.getElementById("blackBox");

//Loops through each span element in pieces collection
for (let items of pieces) {
   //Sets the draggable attribute to "true"
   items.draggable = "true";
   //Adds a dragstart event listener to the item
   items.ondragstart = function (e) {
      //Sets the data of the dragged item to its ID
      e.dataTransfer.setData("text", e.target.id);
   }
}

//Loops through each td element in boardSquares collection
for (let items of boardSquares) {
   //Adds a dragover event listener to the item
   items.ondragover = function (e) {
      //Prevents the default dragover behavior
      e.preventDefault();
   }

   //Adds a drop event listener to the item
   items.ondrop = function (e) {
      //Prevents the default drop behavior
      e.preventDefault();
      //Retrieves the ID of the dragged item from the dataTransfer object
      let pieceID = e.dataTransfer.getData("text");
      //Gets the element with the retrieved ID
      let movingPiece = document.getElementById(pieceID);

      //Checks if the target of the drop event is a "TD" element
      if (e.target.tagName === "TD") {
         //Appends the dragged item to the target
         e.target.appendChild(movingPiece);
      }
      //Checks if the target of the drop event is a "SPAN" element
      else if (e.target.tagName === "SPAN") {
         //Gets the span element that was already in the target td
         let occupyingPiece = e.target;
         //Gets the parent td element of the target span
         let square = e.target.parentElement;
         //Appends the dragged item to the parent td
         square.appendChild(movingPiece);
         //Checks if the occupying piece has a class of "white"
         if (occupyingPiece.className === "white") {
            //Moves the occupying piece to the whiteBox
            whiteBox.appendChild(occupyingPiece);
         } else {
            //Moves the occupying piece to the blackBox
            blackBox.appendChild(occupyingPiece);
         }
      }
   }
}
