"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Thomas Wolf
      Date:   11/6/23

      Filename: project11-02.js
*/

//Gets the postal code input element by ID
let postalCode = document.getElementById("postalCode");
//Gets the place input element by ID
let place = document.getElementById("place");
//Gets the region input element by ID
let region = document.getElementById("region");
//Gets the country select element by ID
let country = document.getElementById("country");

//Sets the onblur event handler for the postal code input
postalCode.onblur = function() {
   //Retrieves the entered postal code value
   let codeValue = postalCode.value;
   //Retrieves the selected country value
   let countryValue = country.value;
   //Clears the current value of the place input
   place.value="";
   //Clears the current value of the region input
   region.value="";
   //Performs a fetch request to the zippopotam.us API using the country and postal code
   fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
   .then(response => response.json()) //Converts the response to JSON
   .then(json => {
      //Sets the place input value to the first place name from the API response
      place.value = json.places[0]["place name"];
      //Sets the region input value to the state abbreviation from the API response
      region.value = json.places[0]["state abbreviation"]
   })
   .catch(error => console.log(error)); //Logs any errors to the console
}

