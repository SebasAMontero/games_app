"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.querySelector('.chessboard');
    const chesspieces = document.querySelector('.chesspieces');
    const quant = 65;
    const quantpieces = 130;
    const squares = [];
    const squarepieces = [];
    const black = 'url(images/black.png)';
    const white = 'url(images/white.png)';
    //sprites de las piezas
    const whiteBishop = 'url(images/whiteBishop.png)';
    const whiteKing = 'url(images/whiteKing.png)';
    const whiteKnight = 'url(images/whiteKnight.png)';
    const whitePawn = 'url(images/whitePawn.png)';
    const whiteQueen = 'url(images/whiteQueen.png)';
    const whiteRook = 'url(images/whiteRook.png)';

    const blackBishop = 'url(images/blackBishop.png)';
    const blackKing = 'url(images/blackKing.png)';
    const blackKnight = 'url(images/blackKnight.png)';
    const blackPawn = 'url(images/blackPawn.png)';
    const blackQueen = 'url(images/blackQueen.png)';
    const blackRook = 'url(images/blackRook.png)';

    // create the board
    function createBoard() {
        let counter = 0;
        for (let i = 1; i < quant; i++) {
            const square = document.createElement('div');

            square.setAttribute('id', i);
            square.className = "square";


            if ((counter % 2 == 0)) {

                (i % 2 == 0) ? square.style.backgroundImage = black : square.style.backgroundImage = white;


            }

            else {
                
                (i % 2 == 0) ? square.style.backgroundImage = white : square.style.backgroundImage = black;

            }

            if ((i % 8 == 0) && (i != 0)) {
                counter++;
            }
         

            chessboard.appendChild(square);
            squares.push(square);
        }


    }
    createBoard();


    function placePieces() {
        let counter = 0;
        for (let j = 66; j < quantpieces; j++) {
            const piece = document.createElement('div');
            piece.setAttribute('id', j);
            piece.className = "piece";
            switch (j) {
                case 66:
                case 73:
                    piece.style.backgroundImage = blackRook;
                    break;
                case 67:
                case 72:
                    piece.style.backgroundImage = blackKnight;
                    break;
                case 68:
                case 71:
                    piece.style.backgroundImage = blackBishop;
                    break;
                case 69:
                    piece.style.backgroundImage = blackQueen;
                    break;
                case 70:
                    piece.style.backgroundImage = blackKing;
                    break;
                case 74:
                case 75:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 80:
                case 81:
                    piece.style.backgroundImage = blackPawn;
                    break;
                case 114:
                case 115:
                case 116:
                case 117:
                case 118:
                case 119:
                case 120:
                case 121:
                    piece.style.backgroundImage = whitePawn;
                    break;
                case 122:
                case 129:
                    piece.style.backgroundImage = whiteRook;
                    break;

                case 123:
                case 128:
                    piece.style.backgroundImage = whiteKnight;
                    break;
                case 124:
                case 127:
                    piece.style.backgroundImage = whiteBishop;
                    break;
                case 125:
                    piece.style.backgroundImage = whiteQueen;
                    break;
                case 126:
                    piece.style.backgroundImage = whiteKing;
                    break;
            }

      

            chesspieces.appendChild(piece);
            squarepieces.push(piece);
        }
    }
    placePieces();
   

});









