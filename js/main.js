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
    }
  };
};
