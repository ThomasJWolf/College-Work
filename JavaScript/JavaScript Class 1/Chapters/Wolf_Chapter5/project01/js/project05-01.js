"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Thomas Wolf
      Date:   9/18/23

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions
let timeID;
let questionList = document.querySelectorAll("#quiz input");
startQuiz.onclick = function () {
   overlay.className = "showquiz";
   timeID = setInterval(countdown, 1000);
};

//Starts the countdown timer
function countdown() {
   if (timeLeft === 0) {
      clearInterval(timeID);
      //Declares the totalCorrect var as the result of the funtion checkAnswers
      let totalCorrect = checkAnswers();
      //Checks to see if the totalCorrect is equal to the amount of answers
      //And if it is create a window stating the user got a 100
      //And if not create a window stating how many the user got right and resets the quiz
      if (totalCorrect === correctAnswers.length) {
         window.alert("Congratulations! You got a 100%!");
      } else {
         window.alert("You got " + totalCorrect + " correct out of " + correctAnswers.length);
         timeLeft = quizTime;
         quizClock.value = quizTime;
         overlay.className = "hidequiz";
      }
   } else {
      timeLeft--;
      quizClock.value = timeLeft;
   }
}





/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}

