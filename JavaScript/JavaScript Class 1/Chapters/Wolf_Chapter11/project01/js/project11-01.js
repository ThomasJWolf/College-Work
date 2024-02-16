"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-01

      Project to retrieve the Astronomy Picture of the Day from NASA
      Author: Thomas Wolf
      Date:   11/6/23

      Filename: project11-01.js
*/

//Gets the DOM element for the image container
let imageBox = document.getElementById("nasaImage");
//Gets the DOM element for the date input
let dateBox = document.getElementById("dateBox");

//Sets the onchange event handler for the date input box
dateBox.onchange = function() {
   //Retrieves the date string from the input
   let dateStr =dateBox.value;
   //Initiates a fetch request to the NASA API with the selected date
   fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dateStr}`)
   .then(response => response.json()) //Parses the response as JSON
   .then(json => showPicture(json)) //Calls showPicture with the resulting JSON
   .catch(error => console.log(error)); //Logs any error that occurs during the fetch operation
}

//Defines the function to display the picture or video
function showPicture(json) {
   //Checks if the media type is video
   if (json.media_type === "video") {
      //Sets the innerHTML of imageBox to an iframe if it's a video
      imageBox.innerHTML = `<iframe src="${json.url}"></iframe><h1>${json.title}</h1><p>${json.explanation}</p>`;
   //Checks if the media type is an image
   } else if (json.media_type === "image") {
      //Sets the innerHTML of imageBox to an img element if it's an image
      imageBox.innerHTML = `<img src="${json.url}" /><h1>${json.title}</h1><p>${json.explanation}</p>`;
   } else {
      //Sets the innerHTML of imageBox to a placeholder text if media type is neither image nor video
      imageBox.innerHTML = "Image not Available";
   }
}
