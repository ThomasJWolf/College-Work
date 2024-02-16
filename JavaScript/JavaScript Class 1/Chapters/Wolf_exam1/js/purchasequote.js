/*    JavaScript 7th Edition
      Exam 1

      Application to 
      Author: Thomas Wolf
      Date:   9/25/23

      Filename: purchasequote.js
 */


//Set constance for all of the values
const SMALL_GATOR_PRICE = 19.95, 
      GATOR_MUG_PRICE = 59.95, 
      MEDIUM_GATOR_PRICE = 29.95, 
      GATOR_NOTEBOOK_PRICE = 69.95, 
      LARGE_GATOR_PRICE = 39.95, 
      GATOR_SHIRT_PRICE = 79.95, 
      GATOR_PEN_PRICE = 49.95, 
      SALES_TAX = 0.07;

// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}

//Checks to see if any of the check boxes are checked and if so they call calcTotal
document.getElementById("smallGator").addEventListener("click", calcTotal);
document.getElementById("gatorMug").addEventListener("click", calcTotal);
document.getElementById("mediumGator").addEventListener("click", calcTotal);
document.getElementById("gatorNotebook").addEventListener("click", calcTotal);
document.getElementById("largeGator").addEventListener("click", calcTotal);
document.getElementById("gatorShirt").addEventListener("click", calcTotal);
document.getElementById("gatorPen").addEventListener("click", calcTotal);

//Calculates the total
function calcTotal() {
   let cost = 0
   //Check the state of each checkbox and add to the total cost if checked
   cost += document.getElementById("smallGator").checked ? SMALL_GATOR_PRICE : 0;
   cost += document.getElementById("gatorMug").checked ? GATOR_MUG_PRICE : 0;
   cost += document.getElementById("mediumGator").checked ? MEDIUM_GATOR_PRICE : 0;
   cost += document.getElementById("gatorNotebook").checked ? GATOR_NOTEBOOK_PRICE : 0;
   cost += document.getElementById("largeGator").checked ? LARGE_GATOR_PRICE : 0;
   cost += document.getElementById("gatorShirt").checked ? GATOR_SHIRT_PRICE : 0;
   cost += document.getElementById("gatorPen").checked ? GATOR_PEN_PRICE : 0;

   //Sets the outputs and calulates the tax
   document.getElementById("itemsTotal").innerHTML = formatCurrency(cost)
   let tax = cost * SALES_TAX
   document.getElementById("itemsTax").innerHTML = formatCurrency(tax)
   let totalCost = cost + tax
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost)
   console.log(formatCurrency(cost))
   console.log(formatCurrency(tax))
   console.log(formatCurrency(totalCost))
}

