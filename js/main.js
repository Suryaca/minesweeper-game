function mineNode() {
  this.strstatus = "unclicked";
  this.boolIsMine = false;
  this.surroundMines = 0;
};
var mineGame = (rows , cols, mines){
  this.rows = rows;
  this.cols = cols;
  this.mines = mines;
  this.isGameOver = false;
  this.board = [];

  this.drawBoard = function(){
    for (var i = 0; i < this.rows; i++) {
      for (var j = 0; j < this.cols; j++) {
        this.board[i][j] = setMine();
      }
    }
    for(var i = 0; i < this.intMines; i++) {
			var mineRow = Math.floor(Math.random()*this.rows);
			var mineColumn = Math.floor(Math.random()*this.cols);
			if(!this.board[mineRow][mineColumn].boolIsMine) {
				this.board[mineRow][mineColumn].boolIsMine = true;
			}
			else {
				i--;
			}
		}
  };
  this.checkClick = function(){ // logic to verify the Clicked element is mine or not
    //if Is Mine -- Alert Game Over & Display the Items

    //else Display the adjecent Bombs
  };
  };
};
