"use strict";
/*    JavaScript 7th Edition
	  Chapter 6
	  Project 06-04

	  Project to turn a selection list into a selection of hypertext links
	  Author: Thomas Wolf
	  Date:   10/2/23

	  Filename: project06-04.js
*/

// Selection lists in the web form
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");

// Option elements within the selection lists
let makeOptions = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");

// The number of options within each selection list
let makes = makeOptions.length;
let models = modelOptions.length;
let trims = trimOptions.length;

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");


// Event handler to modify the content of the Model selection list
// when the Make selection list changes

make.onchange = function () {
	let makeIndex = make.selectedIndex;
	let makeCategory = make.options[makeIndex].text;

	if (makeIndex === 0) {
		showAll(model);
	} else {
		filterSelect(model, makeCategory);
	}
}

// Event handler to modify the content of the Trim selection list
// when the Model selection list changes

model.onchange = function () {
	let modelIndex = model.selectedIndex;
	let modelCategory = model.options[modelIndex].text;

	if (modelIndex === 0) {
		showAll(trim);
	} else {
		filterSelect(trim, modelCategory);
	}
}

//Defines the showAll function
function showAll(selectList) {
	//Gets options from selectList
	let options = selectList.options;
	//Gets the length of the options
	let optionLength = options.length;

	//Loops through each option
	for (let i = 0; i < options.length; i++) {
		// Set the display property to "block" for each option
		options[i].style.display = "block";
	}
}

//Defines the filterSelect function
function filterSelect(selectList, category) {
	//Gets options from selectList
	let options = selectList.options;
	//Gets the length of the options
	let optionLength = options.length;

	//Loops through each option
	for (let i = 0; i < options.length; i++) {
		//Checks if the option's className matches the category
		if (options[i].className === category) {
			//Sets the display property to "block"
			options[i].style.display = "block";
		} else {
			//Sets the display property to "none"
			options[i].style.display = "none"
		}
	}
}

//Adds onclick event handler to selectVehicle
selectVehicle.onclick = function () {
	//Updates vehicle's text content with selected make, model, and trim
	vehicle.textContent = make.options[make.selectedIndex].text + " " + model.options[model.selectedIndex].text + " " + trim.options[trim.selectedIndex].text;
}
