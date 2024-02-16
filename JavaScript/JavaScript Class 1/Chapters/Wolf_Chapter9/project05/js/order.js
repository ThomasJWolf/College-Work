"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-05

      Project to add orders to shopping cart web storage
      Author: Thomas Wolf
      Date:   10/23/23

      Filename: orders.js
*/

// Page Objects
//Gets the "submitButton" element from the DOM
let submitButton = document.getElementById("submitButton");
//Gets the "product" element from the DOM
let product = document.getElementById("product");
//Gets the "price" element from the DOM
let price = document.getElementById("price");
//Gets the "quantity" element from the DOM
let quantity = document.getElementById("quantity");
//Gets the "size" element from the DOM
let size = document.getElementById("size");
//Gets the "color" element from the DOM
let color = document.getElementById("color");

//Assigns a function to the onclick event of the submitButton
submitButton.onclick = function() {
   let itemTotal;
   // Increase the total items in the shopping cart by 1
   if (sessionStorage.getItem("itemsInCart")) {
      itemTotal = parseInt(sessionStorage.getItem("itemsInCart")) + 1;
   } else {
      //Sets the initial value of itemTotal to 1 if "itemsInCart" doesn't exist in session storage
      itemTotal = 1;
   }
   
   // Store the number of items in the shopping cart
   sessionStorage.setItem("itemsInCart", itemTotal);
   
   // Create a text string describing the product added to the cart
   let itemText = product.value + " & ";
   itemText += price.value + " & ";
   itemText += quantity.value + " & ";
   itemText += size.value + " & ";
   itemText += color.value;

   // Create a new shopping cart storage item with the key name "cartItem" plus the item number
   sessionStorage.setItem("cartItem" + itemTotal, itemText);
   
}