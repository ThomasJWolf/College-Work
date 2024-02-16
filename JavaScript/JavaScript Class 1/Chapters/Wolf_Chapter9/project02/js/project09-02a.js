"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-02

      Project to read field values from web storage
      Author: Thomas Wolf
      Date:   10/23/23

      Filename: project09-02a.js
*/

/* Page Objects */

//Gets the riderName element from the document
let riderName = document.getElementById("riderName");
//Gets the ageGroup element from the document
let ageGroup = document.getElementById("ageGroup");
//Gets the bikeOption element from the document
let bikeOption = document.getElementById("bikeOption");
//Gets the routeOption element from the document
let routeOption = document.getElementById("routeOption");
//Gets the accOption element from the document
let accOption = document.getElementById("accOption");
//Gets the region element from the document
let region = document.getElementById("region");
//Gets the miles element from the document
let miles = document.getElementById("miles");
//Gets the comments element from the document
let comments = document.getElementById("comments");

//Assigns the showData function to the click event of the submitButton
document.getElementById("submitButton").onclick = showData;

//Defines the showData function
function showData() {
   //Sets the riderName value into the session storage
   sessionStorage.setItem("riderName", riderName.value);
   //Sets the ageGroup value into the session storage
   sessionStorage.setItem("ageGroup", ageGroup.value);
   //Sets the bikeOption value into the session storage
   sessionStorage.setItem("bikeOption", bikeOption.value);
   //Sets the routeOption value into the session storage
   sessionStorage.setItem("routeOption", routeOption.value);
   //Sets the accOption value into the session storage
   sessionStorage.setItem("accOption", accOption.value);   
   //Sets the region value into the session storage
   sessionStorage.setItem("region", region.value);
   //Sets the miles value into the session storage
   sessionStorage.setItem("miles", miles.value);
   //Sets the comments value into the session storage
   sessionStorage.setItem("comments", comments.value);
   
   //Redirects to the specified URL
   location.href = "project09-02b.html"
}
