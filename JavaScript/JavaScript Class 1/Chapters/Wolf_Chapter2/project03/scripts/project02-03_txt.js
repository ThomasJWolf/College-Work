/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Thomas Wolf
      Date:   8/28/23

      Filename: project02-03.js
 */
// Set "feedback" to "You're hovering over the square" when the square is hovered over
document.getElementById("square").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the square"
}

// Set "feedback" to "" when the square has stoped been hovered over
document.getElementById("square").onmouseout = function() {
      document.getElementById("feedback").innerHTML = ""
}

// Set "feedback" to "You're hovering over the triangle" when the triangle is hovered over
document.getElementById("triangle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the triangle"
}

// Set "feedback" to "" when the triangle has stoped been hovered over
document.getElementById("triangle").onmouseout = function() {
      document.getElementById("feedback").innerHTML = ""
}

// Set "feedback" to "You're hovering over the circle" when the circle is hovered over
document.getElementById("circle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the circle"
}

// Set "feedback" to "" when the circle has stoped been hovered over
document.getElementById("circle").onmouseout = function() {
      document.getElementById("feedback").innerHTML = ""
}