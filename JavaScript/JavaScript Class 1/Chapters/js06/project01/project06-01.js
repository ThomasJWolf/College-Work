"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Thomas Wolf
      Date:   10/2/23

      Filename: project06-01.js
*/

//Gets the element with id "submitButton"
let submitButton = document.getElementById("submitButton");
//Gets the element with id "pwd"
let pwd = document.getElementById("pwd");
//Gets the element with id "pwd2"
let pwd2 = document.getElementById("pwd2");

//Adds an event listener to the submit button for the click event
submitButton.addEventListener("click", function () {
   //Checks if the password does not match the required pattern
   if (pwd.validity.patternMismatch) {
      // Set a custom validity message for mismatched pattern
      pwd.setCustomValidity("Your password must be a minimum of 8 characters, containing at least one number and one letter");
   }
   //Checks if the two password inputs do not match
   else if (pwd.value !== pwd2.value) {
      // Set a custom validity message for mismatched passwords
      pwd.setCustomValidity("Your passwords must match");
   }
   //If there are no errors
   else {
      //Resets the custom validity message
      pwd.setCustomValidity("");
   }
});
