"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo
      Author: Thomas Wolf
      Date:   9/18/23

      Filename: project05-02.js
*/

//Gets all the needed elements
let images = document.getElementsByTagName("img");
let photoBucket = document.getElementById("photo_bucket");
let photoList = document.getElementById("photo_list")

//Loops through all images
for (let i = 0; i < images.length; i++) {
      //Add a click event to each image
      images[i].onclick = function () {
            //Checks to see if the image is in the photo bucket
            if (this.parentElement.id === "photo_bucket") {
                  //Creates a new list item
                  let newItem = document.createElement("li");
                  //Adds a new item to photo list
                  photoList.appendChild(newItem);
                  //Moves the image to new list item
                  newItem.appendChild(this);
            } else {
                  //Gets the parent list item
                  let oldItem = this.parentElement;
                  //Moves the image back to photo bucket
                  photoBucket.appendChild(this);
                  //Removes the old list item
                  oldItem.parentElement.removeChild(oldItem);
            }
      }
}