"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Thomas Wolf
      Date:   9/18/23

      Filename: project05-03.js
*/

//Declare variables
const sourceDoc = document.getElementById("source_doc");
const toc = document.getElementById("toc");
let headingCount = 1;
const heading = "H2";

//Loop through all child nodes of sourceDoc
for (let n = sourceDoc.firstChild; n !== null; n = n.nextSibling) {
      //Check if the node is an h2 element
      if (n.nodeName === heading) {
            //Create an anchor element
            const anchor = document.createElement("a");
            anchor.setAttribute("name", "doclink" + headingCount);

            //Insert the anchor before the first child of the current node
            n.insertBefore(anchor, n.firstChild);
            // Create li and a elements
            const listItem = document.createElement("li");
            const link = document.createElement("a");

            //Add the link to the listItem
            listItem.appendChild(link);

            //Set link text and href attribute
            link.textContent = n.textContent;
            link.setAttribute("href", "#doclink" + headingCount);

            //Add listItem to the table of contents
            toc.appendChild(listItem);

            //Increment the heading count
            headingCount++;
      }
}