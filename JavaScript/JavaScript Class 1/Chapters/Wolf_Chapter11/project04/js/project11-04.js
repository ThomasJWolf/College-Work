"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-04

      Project to retrieve UV index and other solar information for user's current position
      Author: Thomas Wolf
      Date:   11/6/23  

      Filename: project11-04.js
*/

// Table Objects
//Gets the latitude cell element by ID
let latCell = document.getElementById("lat");
//Gets the longitude cell element by ID
let lngCell = document.getElementById("lng");
//Gets the UV index cell element by ID
let uvIndexCell = document.getElementById("uvIndex");
//Gets the UV max cell element by ID
let uvMaxCell = document.getElementById("uvMax");
//Gets the ozone cell element by ID
let ozoneCell = document.getElementById("ozone");
//Gets the safety time for skin type 1 cell element by ID
let st1Cell = document.getElementById("st1");
//Gets the safety time for skin type 2 cell element by ID
let st2Cell = document.getElementById("st2");
//Gets the safety time for skin type 3 cell element by ID
let st3Cell = document.getElementById("st3");
//Gets the safety time for skin type 4 cell element by ID
let st4Cell = document.getElementById("st4");
//Gets the safety time for skin type 5 cell element by ID
let st5Cell = document.getElementById("st5");
//Gets the safety time for skin type 6 cell element by ID
let st6Cell = document.getElementById("st6");

// Get the device's current position
//Uses the Geolocation API to get the current position of the device
navigator.geolocation.getCurrentPosition(getLocation, handleError);

//Defines the function to handle the location success
function getLocation(pos) {
   //Creates an object with the latitude and longitude
   let myPosition = {
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
   }
   
   //API endpoint for UV data
   let url = "https://api.openuv.io/api/v1/uv";
   //API key for accessing the UV index data
   let key = "a680ff3e4f26e4eb68ad5816a303cb23";    
   
   //Fetches the UV index data using the API
   fetch(`${url}?lat=${myPosition.lat}&lng=${myPosition.lng}`, {
      method: 'GET',
      //Sets the headers with the API key
      headers : {
         'x-access-token': key
      }
   })
   //Parses the response as JSON
   .then(response => response.json())
   //Calls the showSunSafety function with the JSON data
   .then(json => showSunSafety(json))
   //Catches and logs any errors to the console
   .catch(error => console.log(error)); 
   
   //Defines the function to display sun safety information
   function showSunSafety(obj) {
      //Sets the latitude text content with precision
      latCell.textContent = myPosition.lat.toFixed(6);
      //Sets the longitude text content with precision
      lngCell.textContent = myPosition.lng.toFixed(6);
      //Sets the UV index text content
      uvIndexCell.textContent = obj.result.uv;
      //Sets the UV max text content
      uvMaxCell.textContent = obj.result.uv_max;
      //Sets the ozone level text content
      ozoneCell.textContent = obj.result.ozone;
      //Sets the safe exposure times for various skin types
      st1Cell.textContent = obj.result.safe_exposure_time.st1;
      st2Cell.textContent = obj.result.safe_exposure_time.st2; 
      st3Cell.textContent = obj.result.safe_exposure_time.st3;
      st4Cell.textContent = obj.result.safe_exposure_time.st4;
      st5Cell.textContent = obj.result.safe_exposure_time.st5;
      st6Cell.textContent = obj.result.safe_exposure_time.st6;
   }    
}

//Defines the function to handle the location error
function handleError() {
   //Alerts the user that the location could not be retrieved
   alert("Unable to get your location");
}
