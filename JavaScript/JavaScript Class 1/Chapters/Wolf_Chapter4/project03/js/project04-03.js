/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Thomas Wolf
      Date:   9/11/23

      Filename: project04-03.js
*/

"use strict";

// Maximum Length of Review
const MAX_REVIEW = 100;
document.getElementById("limit").innerHTML = MAX_REVIEW;

// Reference to elemets in the web page
wordCountBox = document.getElementById("countValue");
warningBox = document.getElementById("warningBox");


// Event listener for typing into the comment box
document.getElementById("comment").addEventListener("keyup", updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   
   // Count the number of characters in the comment box
   commentsText = document.getElementById("comment").value;
   charCount = countCharacters(commentsText);
   wordCountBox.innerHTML = charCount;

   try {
      if (charCount >= MAX_REVIEW) throw "Error!! Maximum 100 characters";
   } catch(err) {
      warningBox.innerHTML = err;
   }  
}





/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
} 