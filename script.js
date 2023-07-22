const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = 810);
const height = (canvas.height = 810);
const ctx = canvas.getContext("2d");
const chessboard = new Image(810,810);
chessboard.src = "Chess_Board.svg"

chessboard.onload = () => {
    ctx.drawImage(chessboard, 0, 0);
  };


const Pieces = {
	Pawn: Symbol("Pawn"),
	Rook: Symbol("Rook"),
	Knight: Symbol("Knight"),
	Bishop: Symbol("Bishop"),
	King: Symbol("King"),
	Queen: Symbol("Queen")
}


class ChessPiece {
    pos;
    captured;

    constructor(pos){
        this.pos = pos;
        captured = false;
    }
}

class Pawn extends ChessPiece{
    constructor(pos){
        super(pos);
    }
    
    checkValidMove(movePos){
        return true;
    }

    move(movePos){
        if(this.checkValidMove(movePos)){
            this.pos = movePos;
        }
    }
}

//somewhere in main gameplay loop
//if movePos contains enemy, mark enemy as captured on move