"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-03

      Project to retrieve order history from a web server
      Author: Thomas Wolf
      Date:   11/6/23
      Filename: project11-03.js
*/

//Gets the element to display order results
let orderResult = document.getElementById("orderResult");
//Gets the user ID input element
let userIDBox = document.getElementById("userID");
//Gets the password input element
let pwdBox = document.getElementById("pwd");

//Retrieve order history when the View Orders button is clicked
viewOrders.onclick = function() {
   //Stores the user ID from input
   let user = userIDBox.value;
   //Stores the password from input
   let pwd = pwdBox.value;
   //Initiates a fetch request with user ID and password to the server-side script
   fetch(`wworders.pl?id=${user}&pwd=${pwd}`)
   .then(response => response.json()) //Converts the response to JSON format
   .then(json => buildOrderTable(json)) //Calls function to build the order table with JSON data
   .catch(error => console.log(error)); //Catches and logs any errors to the console  
}

//Function to display order history within web tables
function buildOrderTable(obj) {
   //Checks if the status message is "Orders Not Found"
   if (obj.status === "Orders Not Found") {
      //Displays a message if no orders are found
      orderResult.innerHTML = "No orders found for this user id and password";
   } else {
      //Begins building the HTML table string with user information
      let htmlCode = `<table id="summary">
                   <tr><th>Name</th><td>${obj.username}</td>
                   <tr><th>Total Charges</th><td>${obj.totalCharges}</td></tr>
                   </table>`;
      
      //Iterates over each order in the order history
      for (let orders of obj.orderHistory) {
         //Appends each order's date and cost to the HTML string
         htmlCode += `<table class="orderList">
                      <tr><th colspan="2">${orders.orderDate}</th><th colspan="2">${orders.orderCost}</th></tr>
                      <tr><th>Description</th><th>Qty</th><th>Price</th><th>Total</th></tr>`;
         //Iterates over each item in the products list
         for (let items of orders.products) {
            //Appends item details to the HTML string
            htmlCode += `<tr><td>${items.description}</td><td>${items.qty}</td><td>${items.price}</td><td>${items.total}</td></tr>`;
         }
         //Closes the current table HTML string
         htmlCode += `</table>`;
      }
      
      //Sets the innerHTML of the orderResult to the final HTML code
      orderResult.innerHTML = htmlCode;
      
   }
}
