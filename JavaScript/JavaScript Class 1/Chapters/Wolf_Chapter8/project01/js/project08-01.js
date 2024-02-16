"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Thomas Wolf
      Date:   10/16/23

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

//Defines the timer constructor for minutes, seconds, and timeID
function timer(min, sec) {
   this.minutes = min;
   this.seconds = sec;
   this.timeID = null;
}

//Adds the runPause method to the timer prototype
timer.prototype.runPause = function(timer, minBox, secBox) {
   //Checks if the timer has an active interval
   if (timer.timeID) {
      //Clears the active interval
      window.clearInterval(timer.timeID);
      //Resets the timeID property to null
      timer.timeID = null;
   } else {
      //Sets a new interval for the countdown function
      timer.timeID = window.setInterval(countdown, 1000);    
   }
   
   //Defines the countdown function
   function countdown() {
      //Checks if there are remaining seconds
      if (timer.seconds > 0) {
         //Decreases the seconds by 1
         timer.seconds--;
      //Checks if there are remaining minutes
      } else if (timer.minutes > 0) {
         //Resets the seconds to 59
         timer.seconds = 59;
         //Decreases the minutes by 1
         timer.minutes--;
      } else {
         //Clears the active interval
         window.clearInterval(timer.timeID);
         //Resets the timeID property to null
         timer.timeID = null;
      }

      //Updates the minutes display box
      minBox.value = timer.minutes;
      //Updates the seconds display box
      secBox.value = timer.seconds;
   } 
   
}

/*---------------Interface Code -----------------*/

//Gets the elements for the minutes input box, seconds input box, and the run/pause button
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

//Creates a new timer object with initial values from input boxes
let myTimer = new timer(minBox.value, secBox.value);

//Listens for changes in the minutes input box
minBox.onchange = function() {
   //Updates the minutes property of the timer object
   myTimer.minutes = minBox.value;
}

//Listens for changes in the seconds input box
secBox.onchange = function() {
   //Updates the seconds property of the timer object
   myTimer.seconds = secBox.value;
}

//Listens for clicks on the run/pause button
runPauseTimer.onclick = function() {
   //Calls the runPause method of the timer object
   myTimer.runPause(myTimer, minBox, secBox);
}
