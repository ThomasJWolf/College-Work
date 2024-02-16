"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from a query string
      Author: Thomas Wolf
      Date:   10/23/23

      Filename: project09-01b.js
*/

// Retrieve the text of the query string
let query = location.search.slice(1);

// Replace the encoded characters in the query string
query = query.replace(/\+/g, " ");
query = decodeURIComponent(query);

// Split the field=name pairs into separate array items
let cardFields = query.split(/&/g);

for (let items of cardFields) {
   // Extract the field names and values
   let nameValue = items.split(/=/);
   //Sets name to nameValue's 1st index
   let name = nameValue[0];
   //Sets value to nameValue's 2nd index
   let value = nameValue[1];
   
   document.getElementById(name).textContent = value;
}