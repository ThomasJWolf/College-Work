/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: 
      Date:   

      Filename: project03-01.js
*/

let menuItems = document.getElementsByClassName("menuItems")

for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener("click", calcTotal)
}

function calcTotal() {
      let orderTotal = 0;

      for (let i = 0; i < menuItems.length)
}



 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }