/*    JavaScript 7th Edition
      Exam 1

      Application to 
      Author: Thomas Wolf
      Date:   9/25/23

      Filename: purchasecontact.js
 */

// Function to verify the form fields
function verifyForm() {
    // Get values of name, email, and phone
    let lname = document.getElementById("lastName").value;
    let address = document.getElementById("address").value;
    let zipCode = document.getElementById("zipCode").value;
    let email = document.getElementById("email").value;
    // Use conditional operator to display a message
    let message = (lname && address && zipCode && email && phone) ? "Excellent" : "Please fill in all fields";
    window.alert(message);
}
