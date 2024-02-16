"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-05

      Interface to replay a chess game stored in a JSON file
      Author: Thomas Wolf
      Date:   10/16/23 

      Filename: project08-05.js
*/


/*--------------------- Interface Code -------------------*/

// Interface Objects
let moveLog = document.getElementById("moveLog");         // ol element containing the list of the moves
let moveSpans = moveLog.getElementsByTagName("span");     // span element containing the individual moves
let nextButton = document.getElementById("nextButton");   // button to move forward through the game
let prevButton = document.getElementById("prevButton");   // button to move backward through the game
let getLogButton = document.getElementById("getLog");     // button to retrieve game log stored in a JSON file 
let blackBox = document.getElementById("blackBox");       // box containing captured black pieces
let whiteBox = document.getElementById("whiteBox");       // box containing captured white pieces
let titleBox = document.getElementById("title");          // h1 heading for game title
let descBox = document.getElementById("description");     // paragraph for game description

//Sets onchange event for the get log button
getLogButton.onchange = function () {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];

   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile);

   // Once the file has finished loading, parse the JSON file
   // and store the contents in the game object literal
   fr.onload = function () {
      // FIX: Changed "json.parse" to "JSON.parse"
      //Parses the loaded JSON content
      let game = JSON.parse(fr.result);

      //Updates the title box with game title
      titleBox.textContent = game.title;
      //Updates the description box with game description
      descBox.textContent = game.description;

      //Writes the game moves to the move log
      writeMoveLog(game.moves);
      //Creates a new chess set instance
      let mySet = new chessSet(game);

      //Sets up the chess board
      setupBoard(mySet);

      //Sets onclick event for the next button
      nextButton.onclick = function () {
         //Checks if the game move is within the range
         if (game.move < game.moves.length - 1) {
            //Shows the next board state
            showNextBoard(game);
         }
      }
      //Sets onclick event for the previous button
      prevButton.onclick = function () {
         //Checks if the game move is greater than -1
         if (game.move > -1) {
            //Shows the previous board state
            showPrevBoard(game);
         }
      }
   }

};

//Writes moves to the move log
function writeMoveLog(moves) {
   //Loops through the list of moves
   for (let i = 0; i < moves.length; i += 2) {
      let newLI = document.createElement("li");

      // add the white move for each round
      let whiteMove = document.createElement("span");
      whiteMove.textContent = moves[i];
      newLI.appendChild(whiteMove);

      // add the black move for each round
      let blackMove = document.createElement("span");
      blackMove.textContent = moves[i + 1];
      newLI.appendChild(blackMove);

      // Append the two moves to the ordered list
      moveLog.appendChild(newLI);
   }
}

//Sets up the chess board
function setupBoard(set) {
   // Remove any pieces from the current board
   let piecesOnBoard = document.querySelectorAll("table#chessboard tr td span");
   //Loops through the pieces on the board
   for (let i = 0; i < piecesOnBoard.length; i++) {
      //Gets the parent cell of the piece
      let parentCell = piecesOnBoard[i].parentElement;
      //Removes the piece from the parent cell
      parentCell.removeChild(parentCell.lastElementChild);
   }

   // Place chess pieces on the board.
   for (let i = 0; i < set.pieces.length; i++) {
      let pieceImage = document.createElement("span");
      //Sets the HTML content for the piece image
      pieceImage.innerHTML = set.pieces[i].image;
      //Sets the class name for the piece color
      pieceImage.className = set.pieces[i].color;
      //Gets the corresponding square for the piece
      let chessSquare = document.getElementById(set.pieces[i].square);
      //Appends the piece image to the chess square
      chessSquare.appendChild(pieceImage);
   }
}

/* Function to update the board when the next move is played */
function showNextBoard(game) {
   game.move++;

   // Highlight the move text in the move log
   moveSpans[game.move].className = "highlight";

   // Read the notation for the next move 
   let moveStr = game.moves[game.move];

   if (moveStr === "1-0") {
      window.alert("Black Resigns");
      //White win logic
   } else if (moveStr === "0-1") {
      //Black win logic
      window.alert("White Resigns");
   } else if (moveStr === "1/2-1/2") {
      //Draw logic
      window.alert("Draw Accepted");
   } else if (moveStr === "0-0") {
      //Performs a kingside castle
      kingSideCastle();
   } else if (moveStr === "0-0-0") {
      //Performs a queenside castle
      queenSideCastle();
   } else if (moveStr.includes("=")) {
      //Performs a pawn demotion
      pawnDemotion();
   } else if (moveStr.includes("x")) {
      //Performs a piece capture
      capturePiece();
   } else if (moveStr.includes("-")) {
      //Performs a piece move
      movePiece();
   }
   // Move the piece image from the starting cell to the ending cell
   function moveCell(start, end) {
      document.getElementById(end).appendChild(document.getElementById(start).firstElementChild);
   }

   // Move the piece image into the cell and move the occupying piece back to the box
   function removeCell(cell) {
      // Moves a captured piece to the box
      if (game.move % 2 === 0) {    // white captured a black piece
         blackBox.appendChild(document.getElementById(cell).firstElementChild);
      } else {                      // black captured a white piece
         whiteBox.appendChild(document.getElementById(cell).firstElementChild);
      }
   }

   // Perform a kingside castle
   function kingSideCastle() {
      // Checks if the current move is even
      if (game.move % 2 === 0) {  // white kingside castle
         //Moves the white king
         moveCell("e1", "g1");
         //Moves the white rook
         moveCell("h1", "f1");
      } else {                    // black kingside castle
         //Moves the black king
         moveCell("e8", "g8");
         //Moves the black rook
         moveCell("h8", "f8");
      }
   }

   // Perform a queenside castle
   function queenSideCastle() {
      // Checks if the current move is odd
      if (game.move % 2 === 1) {  // white queenside castle
         //Moves the white king
         moveCell("e1", "c1");
         //Moves the white rook
         moveCell("a1", "d1");
      } else {                    // black queenside castle
         //Moves the black king
         moveCell("e8", "c8");
         //Moves the black rook
         moveCell("a8", "d8");
      }
   }

   // Promote a pawn that reaches the end rank
   function pawnPromotion() {
      //Extracts the move's index
      let mIndex = moveStr.indexOf("-");
      //Determines the start cell
      let startCell = moveStr.substr(mIndex - 2, 2);
      //Determines the end cell
      let endCell = moveStr.substr(mIndex + 1, 2);
      //Moves the pawn
      moveCell(startCell, endCell);
      //Extracts the new piece
      let newPiece = moveStr.charAt(moveStr.length - 1);
      let rankNum;
      //Assigns unicode based on promoted piece
      switch (newPiece) {
         case "P": rankNum = 9817; break;  // unicode for white pawn
         case "N": rankNum = 9816; break;  // unicode for white knight
         case "B": rankNum = 9815; break;  // unicode for white bishop
         case "R": rankNum = 9814; break;   // unicode for white rook
         case "Q": rankNum = 9813; break;  // unicode for white queen
         case "K": rankNum = 9812; break;  // unicode for white king
      }

      // Checks if move was made by black
      if (game.move % 2 === 1) {   // move was made by black change unicode to black piece image
         rankNum += 6;
      }

      // Change image to promoted piece
      document.getElementById(endCell).firstElementChild.innerHTML = "&#" + rankNum + ";";
   }

   // Retrieve the address of starting cell and ending (occupied) cell
   function capturePiece() {
      //Extracts the move's index
      let tIndex = moveStr.indexOf("x");
      //Determines the start cell
      let startCell = moveStr.substr(tIndex - 2, 2);
      //Determines the end cell
      let endCell = moveStr.substr(tIndex + 1, 2);
      removeCell(endCell);  // remove piece from the cell
      //Moves the capturing piece
      moveCell(startCell, endCell);
   }


   // Retrieve the adress of the starting cell and ending (unoccupied) cell
   function movePiece() {
      //Extracts the move's index
      let mIndex = moveStr.indexOf("-");
      //Determines the start cell
      let startCell = moveStr.substr(mIndex - 2, 2);
      //Determines the end cell
      let endCell = moveStr.substr(mIndex + 1, 2);
      //Moves the piece
      moveCell(startCell, endCell)
   }

}


/* Function to update the board when the current move is undone */
function showPrevBoard(game) {
   // Remove highlighting from the move
   moveSpans[game.move].classList.remove("highlight");

   // Read the notation for of current move 
   let moveStr = game.moves[game.move];

   if (moveStr === "1-0") {
      // Do nothing in reverse
   } else if (moveStr === "0-1") {
      // Do nothing in reverse
   } else if (moveStr === "1/2-1/2") {
      // Do nothing in reverse
   } else if (moveStr === "0-0") {
      //Kingside castle logic
      kingSideCastle();
   } else if (moveStr === "0-0-0") {
      //Queenside castle logic
      queenSideCastle();
   } else if (moveStr.includes("=")) {
      //Pawn demotion logic
      pawnDemotion();
   } else if (moveStr.includes("x")) {
      //Piece addition logic
      addPiece();
   } else if (moveStr.includes("-")) {
      //Piece move logic
      movePiece();
   }

   // Reduce the move number by 1
   game.move--;

   // Move the piece back from its ending cell to its starting cell
   function moveCell(start, end) {
      document.getElementById(end).appendChild(document.getElementById(start).firstElementChild);
   }

   // Move a captured piece from its box back to the board
   function addCell(cell) {
      // Moves a captured piece to the box
      if (game.move % 2 === 0) {    // move the black piece back to the board
         document.getElementById(cell).appendChild(blackBox.lastElementChild);
      } else {                      // move the white piece back to the board
         document.getElementById(cell).appendChild(whiteBox.lastElementChild);
      }
   }

   // Perform a kingside caste in reverse
   function kingSideCastle() {
      // Checks if the current move is even
      if (game.move % 2 === 0) {  // white kingside castle
         //Moves the white king
         moveCell("e1", "g1");
         //Moves the white rook
         moveCell("h1", "f1");
      } else {                    // black kingside castle
         //Moves the black king
         moveCell("e8", "g8");
         //Moves the black rook
         moveCell("h8", "f8");
      }
   }

   // Perform a queenside castle in reverse
   function queenSideCastle() {
      // Checks if the current move is odd
      if (game.move % 2 === 1) {  // white queenside castle
         //Moves the white king
         moveCell("e1", "c1");
         //Moves the white rook
         moveCell("a1", "d1");
      } else {                    // black queenside castle
         //Moves the black king
         moveCell("e8", "c8");
         //Moves the black rook
         moveCell("a8", "d8");
      }
   }
   // Demote a pawn that had reached the end rank
   function pawnDemotion() {
      //Finds the index of the "-" character in the move string
      let mIndex = moveStr.indexOf("-");
      //Extracts the ending cell position from the move string
      let startCell = moveStr.substr(mIndex + 1, 2);
      //Extracts the starting cell position from the move string
      let endCell = moveStr.substr(mIndex - 2, 2);
      //Moves the piece from start cell to end cell
      moveCell(startCell, endCell);
      //Gets the promoted piece character from the move string
      let newPiece = moveStr.charAt(moveStr.length - 1);
      //Declares a variable to store the unicode of the pawn
      let rankNum;
      //Checks if the current move was made by black
      if (game.move % 2 === 1) {   // move was made by black change unicode to black pawn image
         //Sets the unicode for the black pawn
         rankNum = 9823;
      } else {
         //Sets the unicode for the white pawn
         rankNum = 9817;
      }

      // Change image to promoted piece
      document.getElementById(endCell).firstElementChild.innerHTML = "&#" + rankNum + ";";

   }

   // Find the addresses of the starting and ending cell during a capture
   function addPiece() {
      function addPiece() {
         //Finds the index of the "x" character in the move string
         let tIndex = moveStr.indexOf("x");
         //Extracts the ending cell position from the move string
         let startCell = moveStr.substr(tIndex + 1, 2);
         //Extracts the starting cell position from the move string
         let endCell = moveStr.substr(tIndex - 2, 2);
         //Moves the piece from start cell to end cell
         moveCell(startCell, endCell);
         //Adds the captured piece back to its original position
         addCell(startCell);
      }
   }

   // Find the addresses of the starting and ending cell during a move
   function movePiece() {
      //Finds the index of the "-" character in the move string
      let mIndex = moveStr.indexOf("-");
      //Extracts the ending cell position from the move string
      let startCell = moveStr.substr(mIndex + 1, 2);
      //Extracts the starting cell position from the move string
      let endCell = moveStr.substr(mIndex - 2, 2);
      //Moves the piece from start cell to end cell
      moveCell(startCell, endCell);
   }
}