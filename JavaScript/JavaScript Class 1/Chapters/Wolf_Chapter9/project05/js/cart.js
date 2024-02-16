"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-05

      Project to add orders to shopping cart web storage
      Author: Thomas Wolf
      Date:   10/23/23

      Filename: cart.js
*/

// Page Objects
let cartContainer = document.getElementById("cartContainer");

//Adds an event listener that runs the displayCart function when the page loads
window.addEventListener("load", displayCart);

// Function to construct the table containing items placed in the shopping cart
function displayCart() {

   // Check that there are items in the shopping cart
   if (sessionStorage.getItem("itemsInCart")) {
      //Retrieves the total number of items in the cart from session storage
      let itemTotal = sessionStorage.getItem("itemsInCart");

      // Create the code for the table and the table header
      let cartTable = document.createElement("table");
      cartTable.id = "cartTable";
      //Creates a string for the table header
      let tableHeader = `<tr><th>Product</th><th>Description</th><th>Qty</th><th>Price</th>`;
      //Sets the innerHTML of the cartTable to the tableHeader string
      cartTable.innerHTML = tableHeader;

      // For each item in the shopping cart, write a table row
      for (let i = 1; i <= itemTotal; i++) {

         // Retrieve information about a product added to the cart
         let productArr = sessionStorage.getItem("cartItem" + i).split(" & ");
         //Creates a new table row element
         let newRow = document.createElement("tr");

         // Display the name of the product
         let productCell = document.createElement("td");
         //Sets the text content of the productCell to the product name
         productCell.textContent = productArr[0];
         //Appends the productCell to the newRow
         newRow.appendChild(productCell);

         // Display a description of the product (size and color)
         let descriptionCell = document.createElement("td");
         //Sets the text content of the descriptionCell to the product size and color
         descriptionCell.textContent = productArr[3] + ", " + productArr[4];
         //Appends the descriptionCell to the newRow
         newRow.appendChild(descriptionCell);

         // Display the quantity ordered
         let qtyCell = document.createElement("td");
         //Sets the text content of the qtyCell to the product quantity
         qtyCell.textContent = productArr[2];
         //Appends the qtyCell to the newRow
         newRow.appendChild(qtyCell);

         // Display the price of the item
         let priceCell = document.createElement("td");
         //Sets the text content of the priceCell to the product price
         priceCell.textContent = productArr[1];
         //Appends the priceCell to the newRow
         newRow.appendChild(priceCell);

         //Appends the newRow to the cartTable
         cartTable.appendChild(newRow);
      }

      //Appends the cartTable to the cartContainer in the DOM
      cartContainer.appendChild(cartTable);
   }
}