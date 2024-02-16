"use strict";
/*    JavaScript 7th Edition
	  Chapter 6
	  Project 06-03

	  Script to complete a form containing billing and shipping address information
	  Author: Thomas Wolf
	  Date:   10/2/23

	  Filename: project06-03.js
*/

//Gets the element with id "useShip"
let useShip = document.getElementById("useShip");

//Adds an event listener to the "useShip" element for the click event
useShip.addEventListener("click", copyShippingToBilling);

//Defines the function to copy shipping details to billing
function copyShippingToBilling() {
	//Checks if the "useShip" checkbox is checked
	if (useShip.checked) {
		//Copys "firstname" from shipping to billing
		document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
		//Copys "lastname" from shipping to billing
		document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
		//Copys "address1" from shipping to billing
		document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
		//Copys "address2" from shipping to billing
		document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
		//Copys "city" from shipping to billing
		document.getElementById("cityBill").value = document.getElementById("cityShip").value;
		//Copys "country" from shipping to billing
		document.getElementById("countryBill").value = document.getElementById("countryShip").value;
		//Copys "code" from shipping to billing
		document.getElementById("codeBill").value = document.getElementById("codeShip").value;
		//Copys the selected index for "state" from shipping to billing
		document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
	}
}

//Gets all input elements of type 'text'
let formElements = document.querySelectorAll("input[type='text']");
//Gets the number of such input elements
let elementCount = formElements.length;
//Gets the error box element with id "errorBox"
let errorBox = document.getElementById("errorBox")

//Loops through all text input elements
for (let i = 0; i < elementCount; i++) {
	//Adds an event listener for invalid input to each text input
	formElements[i].addEventListener("invalid", showValidationError);
}

//Defines the function to display validation errors
function showValidationError(evt) {
	//Prevents default behavior of the event
	evt.preventDefault();
	//Sets the error message in the error box
	errorBox.textContent = "Complete all highlighted fields";
}
