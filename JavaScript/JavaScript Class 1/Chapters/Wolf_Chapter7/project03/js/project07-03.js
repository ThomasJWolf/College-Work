"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Thomas
      Date:   10/9/23

      Filename: project07-03.js
*/

//Gets elements that will display the current time and the countdown details
let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

//Sets an interval to call the countdown function every second
window.setInterval(countdown, 1000);

//Defines the countdown function
function countdown() {
   //Gets the current date and time
   let now = new Date();   

   //Displays the current date and time
   currentTime.textContent = now.toLocaleString();

   //Sets the target date to January 1st of the next year
   let newYear = new Date("January 1, 2024");
   let nextYear = now.getFullYear() + 1;
   newYear.setFullYear(nextYear);

   //Calculates days left to the new year
   let daysLeft = (newYear - now) / (24 * 60 * 60 * 1000);
   
   //Calculates remaining time components
   let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
   let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
   let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

   //Displays days, hours, minutes, and seconds left in their respective boxes
   daysLeftBox.textContent = Math.floor(daysLeft);
   hrsLeftBox.textContent = Math.floor(hrsLeft);
   minsLeftBox.textContent = Math.floor(minsLeft);
   secsLeftBox.textContent = Math.floor(secsLeft);
}
