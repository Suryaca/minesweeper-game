clickCounter = 0;
function mineNode() {
  this.strstatus = "unclicked";
  this.hasMine = false;
  this.surroundMines = 0;
};
var mineGame = function(rows,cols,mines){
  this.rows = rows;
  this.cols = cols;
  this.mines = mines;
  this.isGameOver = false;
  this.board=[[]];

  this.drawBoard = function(){
    for (var i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (var j = 0; j < this.cols; j++) {
        this.board[i][j] = new mineNode();
      }
    }
    for(var i = 0; i < this.mines; i++) {
			var mineRow = Math.floor(Math.random()*this.rows);
			var mineColumn = Math.floor(Math.random()*this.cols);
			if(!this.board[mineRow][mineColumn].hasMine){
				this.board[mineRow][mineColumn].hasMine = true;
			}
			else {
				i--;
			}
		}
    var mineDiv = document.createElement('div');
    mineDiv.className = 'minesweeper';
    var colDiv =[];
    var rowDiv =[];
    for(var i =0;i<7;i++){
      colDiv[i] = document.createElement('div');
      colDiv[i].className = 'col';
      for(var j =0;j<7;j++){
        rowDiv[j] = document.createElement('div');
        rowDiv[j].className = 'row';
        colDiv[i].appendChild(rowDiv[j]);
        rowDiv[j].addEventListener('click', this.checkClick(i,j));
      }
      mineDiv.appendChild(colDiv[i]);
    }
    console.log(mineDiv);
    document.body.appendChild(mineDiv);
  };
  this.checkClick = function(row , col) { // logic to verify the Clicked element is mine or not

    if ((this.board[row][col].hasmine == true )|| clickCounter == (this.rows * this.cols))
      console.log(" Has Mine");
    else
      console.log("Got Lucky")

  };
};

window.onload = function(){
  mineGame = new mineGame(7,7,10);
  mineGame.drawBoard();
};
