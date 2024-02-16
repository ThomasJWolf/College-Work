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
//Gets the "best" element from the DOM
let bestText = document.getElementById("best");
//Gets the "timer" element from the DOM
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function () {
   //Checks if cookies exist for the document
   if (document.cookie) {
      //Updates the text content of bestText with the best time in seconds
      bestText.textContent = getBestTime() + " seconds";
   }
});


//Function to retrieve the best time from the cookie
function getBestTime() {
   //Checks if cookies exist for the document
   if (document.cookie) {
      //Splits the cookie string into an array based on "="
      let cookieArray = document.cookie.split("=");
      //Returns the integer value of the second element in the cookie array (time value)
      return parseInt(cookieArray[1]);
   } else {
      //Returns a default high value if no cookie exists
      return 9999;
   }
}

//Function to update the record/best time
function updateRecord() {
   //Retrieves and parses the current solution time from the timer element
   let solutionTime = parseInt(document.getElementById("timer").value);

   //Calls the getBestTime function to retrieve the current best time
   let bestTime = getBestTime();

   //Compares the solution time with the best time and updates the best time if necessary
   if (solutionTime < bestTime) {
      bestTime = solutionTime;
   }

   //Updates the text content of bestText with the best time in seconds
   bestText.textContent = bestTime + " seconds";
   //Stores the best time in a cookie with a lifespan of 90 days
   document.cookie = "puzzle8Best=" + bestTime + "; max-age=" + 60 * 60 * 24 * 90;
}


