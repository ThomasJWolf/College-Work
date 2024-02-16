"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-03

      Project to build a pizza using object oriented programming
      Author: Thomas Wolf
      Date:   10/16/23

      Filename: project08-03.js
*/

/*---------------- Object Code ----------------------*/

//Declares the cart object
let cart = {
   //Initializes an empty array for cart items
   items: [],

   //Defines a method to add an item to the cart
   addItem: function (foodItem) {
      //Adds the provided food item to the items array
      this.items.push(foodItem);
   }
}

//Defines a constructor function for creating pizza objects
function Pizza() {
   //Declares a property for pizza size, crust, and toppings
   this.size;
   this.crust;
   this.toppings = [];
}

//Defines a constructor function for creating topping objects
function Topping() {
   //Declares a property for topping name and side
   this.name;
   this.side;
}

//Defines a method to add a topping to a pizza instance
Pizza.prototype.addTopping = function (topping) {
   //Adds the provided topping to the toppings array of the pizza
   this.toppings.push(topping);
};

//Defines a method to add a pizza to the shopping cart
Pizza.prototype.addToCart = function (cart) {
   //Adds the current pizza object to the cart
   cart.items.push(this);
}

//Defines a method to provide a summary of the pizza's properties
Pizza.prototype.summarize = function () {
   //Creates the summary string
   let summary = "Pizza: ";
   //Appends the pizza size to the summary
   summary += this.size + " ";
   //Appends the pizza crust to the summary
   summary += this.crust + " ";
   //Iterates through the toppings to append them to the summary
   for (let i = 0; i < this.toppings.length; i++) {
      summary += this.toppings[i].name + " (" + this.toppings[i].side + ") ";
   }
   //Returns the compiled summary
   return summary;
}

/*----------------------------- Interface Code -------------------------*/

//Gets the element for displaying the pizza image
let pizzaPreviewBox = document.getElementById("previewBox");

//Gets the dropdown element for selecting pizza size
let pizzaSizeBox = document.getElementById("pizzaSize");

//Gets the dropdown element for selecting pizza crust
let pizzaCrustBox = document.getElementById("pizzaCrust");

//Gets the elements for all pizza topping option buttons
let toppingOptions = document.querySelectorAll("input.topping");

//Gets the "Add to Cart" button element
let addToCart = document.getElementById("addToCart");

//Gets the element for displaying the shopping cart items
let cartBox = document.getElementById("cart");

//Attaches event handlers to each topping option
for (let i = 0; i < toppingOptions.length; i++) {
   toppingOptions[i].onclick = drawPizza;
}

//Attaches an event handler to the "Add to Cart" button
addToCart.onclick = updateCart;

//Defines a function to clear the pizza image from the preview box
function clearPizzaImage() {
   //Removes all images from the pizza preview box
   while (pizzaPreviewBox.firstChild) {
      pizzaPreviewBox.removeChild(pizzaPreviewBox.firstChild);
   }
}

//Defines a function to reset all topping selections
function clearToppings() {
   //Gets all topping checkboxes with a value of 'none'
   let noTopping = document.querySelectorAll("input.topping[value='none']");

   //Sets each of these checkboxes to checked
   for (let i = 0; i < noTopping.length; i++) {
      noTopping[i].checked = true;
   }
}

//Defines a function to visualize the selected pizza in the preview box
function drawPizza() {
   //Clears the current pizza image
   clearPizzaImage();

   //Gets all checked topping checkboxes
   let checkedToppings = document.querySelectorAll("input.topping:checked");

   //Iterates through each selected topping to draw it on the pizza
   for (let i = 0; i < checkedToppings.length; i++) {
      if (checkedToppings[i].value !== "none") {
         //Creates an image element for the topping
         let toppingImage = document.createElement("img");
         //Sets the image source based on the topping name
         toppingImage.src = "images/" + checkedToppings[i].name + ".png";
         //Assigns a class to the image based on its side (left, right, etc.)
         toppingImage.className = checkedToppings[i].value;
         //Appends the topping image to the pizza preview box
         pizzaPreviewBox.appendChild(toppingImage);
      }
   }
}

//Defines a function to construct a pizza object based on user selections
function buildPizza() {
   //Gets all checked topping checkboxes
   let checkedToppings = document.querySelectorAll("input.topping:checked");
   //Creates a new pizza instance
   let myPizza = new Pizza();
   //Sets the size and crust of the pizza based on user selection
   myPizza.size = pizzaSizeBox.value;
   myPizza.crust = pizzaCrustBox.value;
   //Iterates through each selected topping to add it to the pizza
   for (let i = 0; i < checkedToppings.length; i++) {
      console.log(checkedToppings[i].value);
      if (checkedToppings[i].value !== "none") {
         //Creates a new topping instance
         let myTopping = new Topping();
         //Sets the name and side of the topping based on user selection
         myTopping.name = checkedToppings[i].name;
         myTopping.side = checkedToppings[i].value;
         //Adds the topping to the pizza
         myPizza.addTopping(myTopping);
      }
   }

   //Returns the constructed pizza object
   return myPizza;
}

//Defines a function to add the built pizza to the shopping cart and update the cart display
function updateCart() {
   //Builds the pizza object based on user selections
   let myPizza = buildPizza();

   //Adds the pizza to the cart
   cart.addItem(myPizza);
   //Logs the cart object to the console
   console.log(cart);

   //Creates a new paragraph element
   let newP = document.createElement("p");
   //Sets the text content of the paragraph to the pizza summary
   newP.textContent = myPizza.summarize();
   //Appends the paragraph to the shopping cart box
   cartBox.appendChild(newP);

   //Clears the pizza image from the preview box
   clearPizzaImage();
   //Resets all topping selections
   clearToppings();
}  
