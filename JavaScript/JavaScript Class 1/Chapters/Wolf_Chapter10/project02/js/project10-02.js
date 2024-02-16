"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-02

      Project to create a drag and drop tangram puzzle
      Author: Thomas Wolf
      Date:   10/30/23

      Filename: project10-02.js
*/

// Reference to the tangram puzzle board
let puzzleBoard = document.getElementById("puzzle");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
//Declares variables for the event's X and Y coordinates
let eventX, eventY;
//Declares variables for the tangram's X and Y coordinates
let tanX, tanY;

// Node list representing the tangram pieces
let tans = document.querySelectorAll("div#puzzle > img");

// Function to rotate a tan by a specified number of degrees
function rotateTan(elem, deg) {
   //Gets the computed style of the element
   const obj = window.getComputedStyle(elem, null);
   //Gets the transform property value of the object
   const matrix = obj.getPropertyValue("transform");
   //Initializes angle to 0
   let angle = 0;
   //Checks if there is a transform applied
   if (matrix !== "none") {
      //Parses the matrix values
      const values = matrix.split('(')[1].split(')')[0].split(',');
      //Gets the a value from the matrix
      const a = values[0];
      //Gets the b value from the matrix
      const b = values[1];
      //Calculates the rotation angle in degrees from the matrix values
      angle = Math.round(Math.atan2(b, a) * (180/Math.PI));      
   }
   
   //Adjusts negative angles to positive equivalents
   if (angle < 0) {
      angle += 360;
   }
   
   //Computes the new angle by adding the specified degrees
   let newAngle = angle + deg;
   
   //Applies the new rotation to the element
   elem.style.transform = "rotate(" + newAngle + "deg)";
}

//Adds pointerdown event listener to each tangram piece
for (let items of tans) {
   items.addEventListener("pointerdown", grabTan);
}

//Function to handle the grabbing of a tangram piece
function grabTan(e) {
   //Checks if shift key is pressed during the pointerdown event
   if (e.shiftKey) {
      //Rotates the tangram piece by 15 degrees
      rotateTan(e.target, 15);
   } else {
      //Gets the X coordinate of the pointer event
      eventX = e.clientX;
      //Gets the Y coordinate of the pointer event
      eventY = e.clientY;
      //Disables the default touch actions on the target element
      e.target.style.touchAction = "none";      
      //Increments the zIndex counter
      zCounter++;
      //Sets the zIndex of the target element to the updated counter
      e.target.style.zIndex = zCounter;   
      //Gets the X coordinate of the target element
      tanX = e.target.offsetLeft;
      //Gets the Y coordinate of the target element
      tanY = e.target.offsetTop;
      //Adds pointermove event listener to the target element
      e.target.addEventListener("pointermove", moveTan);
      //Adds pointerup event listener to the target element
      e.target.addEventListener("pointerup", dropTan);      
   }
} 

//Function to handle the moving of a tangram piece
function moveTan(e) {
   //Calculates the change in X coordinate from the start of the pointerdown event
   let deltaX = e.clientX - eventX;
   //Calculates the change in Y coordinate from the start of the pointerdown event
   let deltaY = e.clientY - eventY;
   //Sets the left position of the target element based on the change in X coordinate
   e.target.style.left = tanX + deltaX + "px";
   //Sets the top position of the target element based on the change in Y coordinate
   e.target.style.top = tanY + deltaY + "px";
} 

//Function to handle the release of a tangram piece
function dropTan(e) {
   //Removes the pointermove event listener from the target element
   e.target.removeEventListener("pointermove", moveTan);
   //Removes the pointerup event listener from the target element
   e.target.removeEventListener("pointerup", dropTan);
}
