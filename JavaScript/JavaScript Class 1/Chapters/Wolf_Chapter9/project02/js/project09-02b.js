"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Thomas Wolf
      Date:   10/23/23

      Filename: project09-02b.js
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

//Sets the riderName's text content to the value retrieved from session storage
riderName.textContent = sessionStorage.getItem("riderName");
//Sets the ageGroup's text content to the value retrieved from session storage
ageGroup.textContent = sessionStorage.getItem("ageGroup");
//Sets the bikeOption's text content to the value retrieved from session storage
bikeOption.textContent = sessionStorage.getItem("bikeOption");
//Sets the routeOption's text content to the value retrieved from session storage
routeOption.textContent = sessionStorage.getItem("routeOption");
//Sets the accOption's text content to the value retrieved from session storage
accOption.textContent = sessionStorage.getItem("accOption");
//Sets the region's text content to the value retrieved from session storage
region.textContent = sessionStorage.getItem("region");
//Sets the miles's text content to the value retrieved from session storage
miles.textContent = sessionStorage.getItem("miles");
//Sets the comments's text content to the value retrieved from session storage
comments.textContent = sessionStorage.getItem("comments");
