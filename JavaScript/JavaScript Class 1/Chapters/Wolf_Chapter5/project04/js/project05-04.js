"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-04

      Project to display footnotes in a popup window
      Author: Thomas Wolf
      Date:   9/18/23

      Filename: project05-04.js
*/

// ode list of phrases that are associated with footnotes
let phrases = document.querySelectorAll("article blockquote dfn");

for (let i = 0; i < phrases.length; i++) {
      phrases[i].onclick = function () {
            //Create the phrase header
            let phrase = document.createElement("h1");
            phrase.textContent = this.textContent;

            //Create the footnote paragraph
            let footnote = document.createElement("p");
            footnote.textContent = footnotes[i];
            footnote.style = "font-style: italic; font-size: 1.2em;";

            //Create the close button
            let closeButton = document.createElement("input");
            closeButton.type = "button";
            closeButton.value = "Close Footnote";
            closeButton.style = "display: block; margin: 10px auto;";

            //Open a popup window
            let popup = window.open("", "footnote", "width=300,height=200,top=100,left=100");

            //Style the popup window
            popup.document.body.style = "background-color: ivory; font-size: 16px; padding: 10px;";

            //Add phrase, footnote, and closeButton to the popup body
            popup.document.body.appendChild(phrase);
            popup.document.body.appendChild(footnote);
            popup.document.body.appendChild(closeButton);

            //Close popup on clicking the closeButton
            closeButton.onclick = function () {
                  popup.close();
            };
      };
}