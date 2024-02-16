/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Thomas Wolf
      Date:   8/28/23

      Filename: project02-04.js
 */


//Set constance for all of the values
const CHICKEN_PRICE = 10.95, HALIBUT_PRICE = 13.95, BURGER_PRICE = 9.95, SALMON_PRICE = 18.95, SALAD_PRICE = 7.95, SALES_TAX = 0.07


// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}

//Checks to see if any of the check boxes are checked and if so they call calcTotal
document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);

//Calculates the total
function calcTotal() {
   let cost = 0
   //Checks to see if each checkbox is checked
   let buyChicken = document.getElementById("chicken").checked
   let buyHalibut = document.getElementById("halibut").checked
   let buyBurger = document.getElementById("burger").checked
   let buySalmon = document.getElementById("salmon").checked
   let buySalad = document.getElementById("salad").checked

   //Adds the constance price of the food to the cost if it is checked
   cost += buyChicken ? CHICKEN_PRICE : 0
   cost += buyHalibut ? HALIBUT_PRICE : 0
   cost += buyBurger ? BURGER_PRICE : 0
   cost += buySalmon ? SALMON_PRICE : 0
   cost += buySalad ? SALAD_PRICE : 0;

   //Sets the outputs and calulates the tax
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost)
   let tax = cost * SALES_TAX
   document.getElementById("foodTax").innerHTML = formatCurrency(tax)
   let totalCost = cost + tax
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost)
}

