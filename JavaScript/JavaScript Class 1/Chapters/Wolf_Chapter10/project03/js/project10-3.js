"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-03

    Boulder Cycling Directions
      Author: Thomas Wolf
      Date:   10/30/23

    Filename: project10-03.js
*/


function showMap() {
   
   // Page objects
   //Gets the bikeMap element
   let bikeMap = document.getElementById("bikeMap");
   //Gets the bikeDirections element
   let bikeDirections = document.getElementById("bikeDirections");
   //Gets the startingPoint element
   let startingPoint = document.getElementById("startingPoint");
   //Gets the endingPoint element
   let endingPoint = document.getElementById("endingPoint");   
   
   //Initializes a new Google Maps Directions Service
   let bikeFind = new google.maps.DirectionsService();
   //Initializes a new Google Maps Directions Renderer
   let bikeDraw = new google.maps.DirectionsRenderer(); 
   
   // Create a map to the Oak Top House
   let Boulder = {lat: 40.01753, lng: -105.26496};
   
   //Creates a new Google Maps instance
   let myMap = new google.maps.Map(bikeMap, {
      zoom: 12,
      center: Boulder,
   });
   
   //Adds an event listener to startingPoint for change events
   startingPoint.addEventListener("change", drawRoute);
   //Adds an event listener to endingPoint for change events
   endingPoint.addEventListener("change", drawRoute);

   //Defines the drawRoute function
   function drawRoute() {
      //Checks if both startingPoint and endingPoint have selected options
      if (startingPoint.selectedIndex !== 0 && endingPoint.selectedIndex !== 0) {

         // Drive from current location to Oak Top House
         let  bikeRoute = {
            origin: startingPoint.value,
            destination: endingPoint.value,
            travelMode: "BICYCLING"
         } 

         // Generate directions for the route
         bikeFind.route(bikeRoute, function(result, status) {
            //Checks if the status is OK
            if (status == "OK") {
               //Sets the directions result
               bikeDraw.setDirections(result);
               // Display route and directions
               bikeDraw.setMap(myMap);
               //Displays the directions in the bikeDirections panel
               bikeDraw.setPanel(bikeDirections);
            } else {
               //Sets an error message when directions are unavailable
               bikeDirections.textContent = "Directions Unavailable: " + status;
            }
         });      

      }
   }   
} 


