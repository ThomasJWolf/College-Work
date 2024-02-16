/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Thomas Wolf
      Date:   8/28/23

      Filename: project02-02.js
 */

// Function to verify the form fields
function verifyForm() {
      // Get values of name, email, and phone
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      // Use conditional operator to display a message
      let message = (name && email && phone) ? "Thank you!" : "Please fill in all fields";
      window.alert(message);
}

// //Checks to see if "submit" has been clicked and if so they call calcTotal
document.getElementById("submit").addEventListener("click", verifyForm);