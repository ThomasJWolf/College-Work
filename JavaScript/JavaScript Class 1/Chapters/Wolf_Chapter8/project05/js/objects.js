"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-05

      Chess Objects used for Chess Games
      Author: Thomas Wolf
      Date:   10/16/23

      Filename: project08-05.js
*/

// Constructor Function for Chess Piece
function piece(color, rank) {
   //FIX: Adds this. at the start
   this.color = color;    // the color of the piece (white or black)
   this.rank = rank;      // the piece rank (Pawn, Knight, Bishop, Rook, Queen, King)
   this.square = null;    // the square the piece occupies
   this.image = null;    // stores the HTML code representing the image of the piece
}

// Constructor Function for a Chess Set
function chessSet(game) {
   this.pieces = []; // empty array of chess pieces used in the game 

   for (let i = 0; i < 8; i++) {         // loop through the chess board rows
      for (let j = 0; j < 8; j++) {      // loop through the chess board columns
         //Checks if the board cell contains a 2-character code for a chess piece
         if (game.board[i][j].length === 2) {

            //Determines the color of the chess piece based on the first character
            let color = (game.board[i][j].charAt(0) === "B") ? "Black" : "White";
            let rank = "";

            //Determines the rank of the chess piece based on the second character
            switch (game.board[i][j].charAt(1)) {
               case "P": rank = "Pawn"; break;
               case "N": rank = "Knight"; break;
               case "B": rank = "Bishop"; break;
               case "R": rank = "Rook"; break;
               case "Q": rank = "Queen"; break;
               case "K": rank = "King"; break;
            }
            // Define a new chess piece
            //FIX: Changes Piece to piece
            let chessPiece = new piece(color, rank);
            //Assigns a square position to the chess piece
            chessPiece.square = String.fromCharCode(j + 97) + (8 - i);
            let image = "";

            //Determines the HTML representation of the chess piece based on the cell code
            switch (game.board[i][j]) {
               case "BP": image = "&#9823;"; break;
               case "BN": image = "&#9822;"; break;
               case "BB": image = "&#9821;"; break;
               case "BR": image = "&#9820;"; break;
               case "BQ": image = "&#9819;"; break;
               case "BK": image = "&#9818;"; break;
               case "WP": image = "&#9817;"; break;
               case "WN": image = "&#9816;"; break;
               case "WB": image = "&#9815;"; break;
               case "WR": image = "&#9814;"; break;
               case "WQ": image = "&#9813;"; break;
               case "WK": image = "&#9812;"; break;
            }

            //Assigns the determined image representation to the chess piece
            chessPiece.image = image;

            //Adds the constructed chess piece to the pieces array
            this.pieces.push(chessPiece);
         }
      }
   }
}