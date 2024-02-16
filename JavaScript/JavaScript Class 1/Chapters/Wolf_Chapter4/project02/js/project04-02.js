/*    JavaScript 7th Edition
      Chapter 4
      Project 04-02

      Application to display a random Jane Austen Quote
      Author: 
      Date:   

      Filename: project04-02.js
*/

"use strict";

// Array of Jane Austen Quotes
let quotes = [
"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
"I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
"Silly things do cease to be silly if they are done by sensible people in an impudent way.",
"Give a girl an education and introduce her properly into the world, and ten to one but she has the means of settling well, without further expense to anybody.",
"Life seems but a quick succession of busy nothings.",
"Our scars make us know that our past was for real.",
"I cannot speak well enough to be unintelligible.",
"One cannot be always laughing at a man without now and then stumbling on something witty.",
"Men were put into the world to teach women the law of compromise.",
"The person, be it gentlemen or lady, who has not pleasure in a good novel, must be intolerably stupid.",
"The wind whispers the secrets of the silent onion.",
"Time is a loop that forgets to tie its own shoelaces.",
"If a thought thinks about thinking, does it become self-aware or merely self-absorbed?",
"An unexamined puddle is not worth splashing.",
"Truth is an illusion; illusion is a flavor best enjoyed with seasoning.",
"The echo of a shadow knows the tune of light.",
"If you chase two rabbits, the third one is a figment of your imagination.",
"To understand a grain of sand is to misunderstand the beach.",
"The clock that ticks backwards is still right twice a day.",
"To feel the rain is easy; to argue with a cloud is foolish.",
"The mirror only lies when it reflects the truth.",
"The quietest tree in the forest is the one that whispers to the mountains.",
"Existence is but a symphony written in the ink of paradox.",
"The puzzle is not in solving life, but in unsolving the mystery of the unknown.",
"A closed book is an unread story; an open book is a closed case of mistaken identity.",
"The heaviest burden is the weight of an empty teacup.",
"If you stumble upon wisdom, make sure to look both ways before crossing.",
"Confusion is the art of understanding what you never will.",
"The window to the soul is double-paned and frosted over with assumptions.",
"I farted and it stinks really bad. - Gavin Smithson"
];


// Run the quote generator every time the page loads
window.addEventListener("load", quoteGenerator);


// Function to generate and display a random quote
function quoteGenerator() {

   // Number of quotes in the array
   var quoteCount = quotes.length;
   
   // Generate a random integer to select a quote
   var randomQuotes = randomInt(0, quoteCount - 1);
   
   // Retrieve a randomly-selected quote
   var quote = quotes[randomQuotes];
   
   
   // Display the random quote
   document.getElementsByTagName("blockquote")[0].innerHTML = quote;
}








/*=================================================================*/
// Function to return a randomly-selected integer between lowest and highest, inclusive
function randomInt(lowest, highest) {
   let size = highest - lowest + 1;
   return Math.floor(lowest + size*Math.random());
}