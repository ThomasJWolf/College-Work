"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Thomas
      Date:   10/9/23

      Filename: project07-04.js
*/

//Initializes a list of customers
let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];


//Gets the input box for the customer name
let customerName = document.getElementById("customerName");

//Gets the container for the list of customers
let customerList = document.getElementById("customerList");

//Gets the button elements by their IDs
let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

//Gets the status box
let status = document.getElementById("status");

//Calls the function to generate the initial customer list
generateCustomerList();

//Function to create and display the customer list
function generateCustomerList() {
   //Clears out the current list
   customerList.innerHTML = "";

   //Loop through each customer and add to the display list
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

//Handles the click event for the 'Add' button
addButton.onclick = function() {
   //Adds the customer to the array
   customers.push(customerName.value);
   
   //Refreshes the displayed list
   generateCustomerList();

   //Updates the status message
   status.textContent = customerName.value + " added to end of the queue";
}

//Handles the click event for the 'Search' button
searchButton.onclick = function() {
   //Gets the position of the customer in the array
   let place = customers.indexOf(customerName.value) + 1;

   //Checks if customer is found or not and update status message
   if (place === 0) {
      status.textContent = customerName.value + " is not found in the queue";
   } else {
      status.textContent = customerName.value + " found in position " + place + " of the queue";
   }
}

//Handles the click event for the 'Remove' button
removeButton.onclick = function() {
   //Finds the index of the customer to be removed
   let index = customers.indexOf(customerName.value);
   
   //Checks if customer exists in list
   if (index !== -1) {
      //Removes the customer from the array
      customers.splice(index, 1);
      
      //Updates the status message
      status.textContent = customerName.value + " removed from the queue";
      
      //Refreshes the displayed list
      generateCustomerList();
   } else {
      //Updates status message if customer is not found
      status.textContent = customerName.value + " is not found in the queue";
   }
}

//Handle the click event for the 'Top' button
topButton.onclick = function() {
   //Remove the first customer from the list
   let topCustomer = customers.shift();

   //Update the status message
   status.textContent = topCustomer + " removed from the queue";

   //Refresh the displayed list
   generateCustomerList();
}

