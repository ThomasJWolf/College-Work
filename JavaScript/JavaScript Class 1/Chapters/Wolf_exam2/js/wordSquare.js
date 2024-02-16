"use strict";
/*    JavaScript 7th Edition
      Exam 2

      Author: Thomas Wolf
      Date:   11/13/23

      Filename: wordSquare.js
*/


document.addEventListener('DOMContentLoaded', function() {
    // Adjust the constants to match the box dimensions
    const SQUARE_SIZE = 30; // Set to half of BALL_RADIUS for smaller squares
    const BOX_HEIGHT = 300;
    const BOX_WIDTH = 500;

    // Update the box object to match the new dimensions
    let box = {
        width: BOX_WIDTH,
        height: BOX_HEIGHT,
        xPos: 0,
        yPos: 0,
        element: document.getElementById("box"), // Ensure this matches your HTML
        // Add methods to update the box's position
        updatePosition: function() {
            this.element.style.transform = `translate(${this.xPos}px, ${this.yPos}px)`;
        }
    };

    // Update the styles of the box to match the new dimensions
    box.element.style.width = box.width + "px";
    box.element.style.height = box.height + "px";

    // Adjust the ball constructor function to represent a square
    function Square() {
        this.size = SQUARE_SIZE;
        this.xPos = box.width / 2 - this.size / 2;
        this.yPos = box.height / 2 - this.size / 2;
        this.xVelocity = rand(-5, 5);
        this.yVelocity = rand(-5, 5);
    }

    // Update the moveWithin method for the square
    Square.prototype.moveWithin = function() {
        this.xPos += this.xVelocity;
        this.yPos += this.yVelocity;

        // Check for collision and move the box if necessary
        if (this.xPos < 0 || this.xPos + this.size > box.width) {
            box.xPos -= this.xVelocity;
            this.xVelocity = -this.xVelocity;
        }
        if (this.yPos < 0 || this.yPos + this.size > box.height) {
            box.yPos -= this.yVelocity;
            this.yVelocity = -this.yVelocity;
        }

        // Constrain the movement within the viewport
        box.xPos = Math.max(0, Math.min(window.innerWidth - box.width, box.xPos));
        box.yPos = Math.max(0, Math.min(window.innerHeight - box.height, box.yPos));
        box.updatePosition();
    };

    // Get the Add Square button reference
    let addSquareBtn = document.getElementById("addSquare");
    let squares = []; // To keep track of squares

    addSquareBtn.addEventListener('click', function() {
        if (squares.length < 20) {
            // Create the square element and append it to the box
            let squareElement = document.createElement("div");
            squareElement.className = "square";
            squareElement.textContent = "First";
            box.element.appendChild(squareElement);

            // Create the square object and add it to the squares array
            let newSquare = new Square();
            squares.push(newSquare);

            // Set an interval to move the square within the box
            setInterval(function() {
                newSquare.moveWithin();
                squareElement.style.left = newSquare.xPos + "px";
                squareElement.style.top = newSquare.yPos + "px";
            }, 25);
        }
    });
});

// Random function remains the same
function rand(minVal, maxVal) {
    let size = maxVal - minVal + 1;
    return Math.floor(Math.random() * size) + minVal;
}
