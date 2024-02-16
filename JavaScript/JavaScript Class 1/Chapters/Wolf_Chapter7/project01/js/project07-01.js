"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Thomas
      Date:   10/9/23

      Filename: project07-01.js
*/

//Gets the signup form element by its ID
let signupForm = document.getElementById("signup");

//Adds an event listener for the form submission
signupForm.addEventListener("submit", function (e) {

   //Gets the value of the password input by its ID
   let pwd = document.getElementById("pwd").value;

   //Gets the feedback element by its ID
   let feedback = document.getElementById("feedback");

   //Prevents the default form submission behavior
   e.preventDefault();

   //Regular expression toChecks for uppercase letters
   let regex1 = /[A-Z]/;

   //Regular expression toChecks for numbers
   let regex2 = /\d/;

   //Regular expression toChecks for special characters
   let regex3 = /[@^&*,./;':"+=_-!\$#%]/;

   //Checks if password length is less than 8
   if (pwd.length < 8) {
      feedback.textContent = "Your password must have at least 8 characters.";
   }
   //Checks if password do not contain an uppercase letter
   else if (regex1.test(pwd) === false) {
      feedback.textContent = "Your password must include an uppercase letter.";
   }
   //Checks if password do not contain a number
   else if (regex2.test(pwd) === false) {
      feedback.textContent = "Your password must include number.";
   }
   //Checks if password do not contain any of the special characters
   else if (regex3.test(pwd) === false) {
      feedback.textContent = "Your password must include one of the following: !$#%.";
   }
   //If all conditions are met, submit the form
   else {
      signupForm.submit();
   }
}
);
