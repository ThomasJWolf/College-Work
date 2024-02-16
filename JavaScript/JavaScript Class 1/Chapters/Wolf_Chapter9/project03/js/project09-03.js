"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-03

      Project to retrieve date of last visit from web storage and mark new article
      Author: Thomas Wolf
      Date:   10/23/23

      Filename: project09-03.js
*/

/* Page Objects */

//Gets the lastVisitDate element from the document
let lastVisitDate = document.getElementById("lastVisitDate");
//Gets the elements with the class name "posttime" from the document
let articleDates = document.getElementsByClassName("posttime");

//Checks if the sbloggerVisit key exists in local storage
if (localStorage.sbloggerVisit) {
   //Gets the value associated with the sbloggerVisit key from local storage
   let storedLastDate = localStorage.getItem("sbloggerVisit");
   //Sets the text content of the lastVisitDate element to the retrieved value
   lastVisitDate.textContent = storedLastDate;
   //Creates a Date object from the storedLastDate string
   let lastDate = new Date(storedLastDate);

   //Loops over each element in the articleDates collection
   for (let items of articleDates) {
      //Creates a Date object from the text content of the current item
      let articleDate = new Date(items.textContent);
      
      //Compares the date of the article with the last visited date
      if (articleDate > lastDate) {
         //Appends the "NEW" label to the text content of the current item if it's newer than the last visited date
         items.innerHTML += "<strong>NEW</strong>";
      }
   }
} else {
   //Sets the text content of the lastVisitDate element to the welcome message for first-time visitors
   lastVisitDate.textContent = "Welcome to SBlogger!";

   //Loops over each element in the articleDates collection
   for (let items of articleDates) {
      //Appends the "NEW" label to the text content of the current item for first-time visitors
      items.innerHTML += "<strong>NEW</strong>";
   }
}

//Creates a Date object with a specific date
let currentDate = new Date("9/12/2024");

//Sets the current date to local storage with the key "sbloggerVisit"
localStorage.setItem("sbloggerVisit", currentDate.toLocaleDateString());
