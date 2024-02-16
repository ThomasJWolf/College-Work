"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-05

      Project to retrieve content for a SF blog
      Author: Thomas Wolf
      Date:   11/6/23 

      Filename: project11-05.js
*/

//Adds an event listener for the window load event
window.addEventListener("load", init);

//Initializes the page elements and data
function init() {
   // Page Objects
   //Gets the selection list by ID
   let selectionList = document.getElementById("authorList");
   //Gets the book review element by ID
   let bookReview = document.getElementById("review");
   //Gets the podcast list element by ID
   let podList = document.getElementById("podcastList");
   
   // Fetch a list of authors from the server
   //Makes a fetch request to retrieve the author list in JSON format
   //FIX: Removed ;
   fetch("../authorlist.json")
      //Parses the response to JSON
      //FIX: Replaces > with =>
      .then(response => response.json())
      //Processes the JSON data
      .then(json => {
         // Place the authors in a selection list
         //Loops through each author in the author list
         for (let authors of json.authorlist) {
            //Creates a new option element
            let newOpt = document.createElement("option");
            //Sets the value of the option to the author's initials
            newOpt.value = authors.initials;
            //Sets the text content of the option to the author's name
            newOpt.textContent = authors.name;
            //Appends the new option to the selection list
            selectionList.appendChild(newOpt);
         }
      
         // Create an onchange event handler that displays a review by the selected author
         //Adds an onchange event to the selection list
         selectionList.onchange = function() {
            //FIX: Replaced & with ?
            //Fetches the book review based on the selected author's initials
            fetch("../sfreviews.pl?author=" + selectionList.value)
            //Parses the response as text
            //FIX: Changed .json to .text
            .then(response => response.text())
            //Sets the inner HTML of the book review element to the fetched review
            .then(review => bookReview.innerHTML = review)
            //Catches and logs any errors to the console
            .catch(e => console.log(e))
         }
      })
      //Catches and logs any errors during the fetch of the author list
      .catch(e => console.log(e));
   
   // Fetch the list of podcasts from an XML document
   //Makes a fetch request to retrieve the podcast list as text
   fetch("../sfpod.xml")
   //Parses the response as text
   //FIX: Changed .json to .text
   .then(response => response.text())
   //Parses the text to XML DOM
   //FIX: Changed Parser() to DOMParser()
   .then(str => new DOMParser().parseFromString(str, "text/xml"))
   //Processes the XML DOM
   .then(dom => {
      // Rewrite the XML structure into an HTML fragment
      //Selects all item elements in the XML
      let podcasts = dom.querySelectorAll("item");
      //Loops through each podcast item
      for (let show of podcasts) {
         //Gets the title from the first child of the item
         let title = show.children[0].textContent;
         //Gets the summary from the second child of the item
         let summary = show.children[1].textContent;
         //Gets the link from the third child of the item
         let link = show.children[2].textContent;
         //Constructs the HTML article element
         //FIX: Uses ` insted of '
         let article = `<article><h1><a href=${link}>${title}</a></h1><p>${summary}</p></article>`;
         //Inserts the article HTML into the podcast list
         podList.insertAdjacentHTML("beforeEnd", article)
      }
   })
   //Catches and logs any errors during the fetch of the podcasts
   .catch(e => console.log(e))
}
