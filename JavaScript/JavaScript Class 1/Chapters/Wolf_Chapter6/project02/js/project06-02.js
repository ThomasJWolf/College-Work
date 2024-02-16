"use strict";
/*    JavaScript 7th Edition
	  Chapter 6
	  Project 06-02

	  Project to turn a selection list into a selection of hypertext links
      Author: Thomas Wolf
      Date:   10/2/23

	  Filename: project06-02.js
*/


//Listend for the window's load event
window.addEventListener("load", function () {

	//Selects all 'select' elements within the form with the id 'govLinks'
	let allSelect = document.querySelectorAll("form#govLinks select");

	//Loops through each 'select' element
	for (let i = 0; i < allSelect.length; i++) {

		//Sets an 'onchange' event listener for each 'select' element
		allSelect[i].onchange = function (evt) {

			//Gets the selected value (URL) from the 'select' element
			let linkURL = evt.target.value;

			//Opens the selected URL in a new window or tab
			let newWin = window.open(linkURL);
		}
	}
});
