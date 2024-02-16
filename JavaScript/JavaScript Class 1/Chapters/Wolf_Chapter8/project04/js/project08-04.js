"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Thomas Wolf
      Date:   10/16/23

      Filename: project08-04.js
*/

/*---------------- Object Code ----------------------*/

//Gets the file input button element
let getFileButton = document.getElementById("getFile");
//Gets the container for displaying content
let containerBox = document.getElementById("container");

//Sets the event listener for the file input change
getFileButton.onchange = function () {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];

   // Read the contents of the selected file
   let fr = new FileReader();
   //Reads the contents of the selected JSON file
   fr.readAsText(JSONfile);

   // Once the file has finished loading, parse the JSON file
   fr.onload = function () {
      //Parses the loaded JSON file
      let staff = JSON.parse(fr.result);
      //Creates a table with the parsed data
      makeStaffTable(staff);
   }

};


//Defines the function to create a table from staff data
function makeStaffTable(staff) {
   //Creates the main table element
   let staffTable = document.createElement("table");
   //Creates the table header row
   let headerRow = document.createElement("tr");

   //Iterates over the properties of the first directory object to set headers
   for (let prop in staff.directory[0]) {
      //Creates a table header cell
      let headerCell = document.createElement("th");
      //Sets the text content of the header cell
      headerCell.textContent = prop;
      //Appends the header cell to the header row
      headerRow.appendChild(headerCell);
   }
   //Appends the header row to the main table
   staffTable.appendChild(headerRow);

   //Iterates over each directory object to create table rows
   for (let i = 0; i < staff.directory.length; i++) {
      //Creates a new table row
      let tableRow = document.createElement("tr");

      //Iterates over the properties of the current directory object
      for (let prop in staff.directory[i]) {
         //Creates a table data cell
         let tableCell = document.createElement("td");
         //Sets the text content of the data cell
         tableCell.textContent = staff.directory[i][prop];
         //Appends the data cell to the table row
         tableRow.appendChild(tableCell);
      }
      //Appends the table row to the main table
      staffTable.appendChild(tableRow);
   }
   //Appends the main table to the container box
   containerBox.appendChild(staffTable);
}