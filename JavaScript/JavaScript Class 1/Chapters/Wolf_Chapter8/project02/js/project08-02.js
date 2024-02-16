"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-02

      Project to add balls bouncing within a container
      Author: Thomas Wolf
      Date:   10/16/23

      Filename: project08-02.js
*/

/*---------------- CONSTANTS ---------------------*/

//Defines constants for ball's radius, box height, and width
const BALL_RADIUS = 60;
const BOX_HEIGHT = 400;
const BOX_WIDTH = 800;

/*--------------- Object Code --------------------*/

//Initializes the box object with its properties
let box = {
   width: BOX_WIDTH,
   height: BOX_HEIGHT,
   xPos: 0,
   yPos: 0
}

/* Constructor function for the ball object class */
function ball(size) {
   //Sets the radius of the ball
   this.radius = size;
   //Initializes the x and y positions of the ball
   this.xPos = null;
   this.yPos = null;
   //Initializes the x and y velocitys of the ball
   this.xVelocity = null;
   this.yVelocity = null;
}

/* Move the ball, reversing direction when it hits a ball */
ball.prototype.moveWithin = function(container) {
      //Determines the top, left, bottom, and right positions of the ball
      let ballTop = this.yPos;
      let ballLeft = this.xPos;
      let ballBottom = this.yPos + this.radius;
      let ballRight = this.xPos + this.radius;

      //Checks for collision on the y-axis and reverses direction
      if (ballTop < 0 || ballBottom > container.height) {
         container.yPos += this.yVelocity;
         this.yVelocity = -this.yVelocity;
      }
      //Checks for collision on the x-axis and reverses direction
      if (ballLeft < 0 || ballRight > container.width) {
         container.xPos += this.xVelocity;
         this.xVelocity = -this.xVelocity;
      } 

      //Updates the y and x positions of the ball
      this.yPos += this.yVelocity;
      this.xPos += this.xVelocity;
};

/*---------------Interface Code -----------------*/

//Gets the reference to the container box
let boxImage = document.getElementById("box");
//Sets the width and height of the boxImage
boxImage.style.width = BOX_WIDTH + "px";
boxImage.style.height = BOX_HEIGHT + "px";
//Sets the top and left positions of the boxImage
boxImage.style.top = "0px";
boxImage.style.left = "0px";

//Gets the reference to the Add Ball button
let addBall = document.getElementById("addBall");

//Assigns a function to run when the addBall button is clicked
addBall.onclick = function() {
   //Creates a new ball image element
   let ballImage = document.createElement("div");
   //Assigns the ball class to the ball image
   ballImage.className = "ball";
   //Sets the width of the ball image
   ballImage.style.width = BALL_RADIUS + "px";
   //Centers the ball image horizontally and vertically inside the box
   ballImage.style.left = (BOX_WIDTH - BALL_RADIUS)/2 + "px";
   ballImage.style.top = (BOX_HEIGHT - BALL_RADIUS)/2 + "px";
   
   //Appends the ball image to the box image
   boxImage.appendChild(ballImage);
   
   //Constructs a new ball object
   let newBall = new ball(BALL_RADIUS);
   //Centers the ball vertically and horizontally inside the box
   newBall.yPos = (BOX_HEIGHT - BALL_RADIUS)/2;
   newBall.xPos = (BOX_WIDTH - BALL_RADIUS)/2;
   //Assigns random y and x velocitys to the ball
   newBall.yVelocity = rand(-10, 10);
   newBall.xVelocity = rand(-10, 10);
   
   //Sets an interval to move the ball and update its position on the screen
   window.setInterval(function() {
      //Moves the ball within the container box
      newBall.moveWithin(box);
      //Updates the top and left positions of the ball image on the screen
      ballImage.style.top = newBall.yPos + "px";
      ballImage.style.left = newBall.xPos + "px";
      //Updates the top and left positions of the box image on the screen
      boxImage.style.top = box.yPos + "px";
      boxImage.style.left = box.xPos + "px";
   }, 25);
   
};

//A Function that returns a random value between minVal and maxValue
function rand(minVal, maxVal) {
   //Calculates the size of the range
   let size = maxVal - minVal + 1;
   //Returns a random number within the specified range
   return minVal + size*Math.random();
}
