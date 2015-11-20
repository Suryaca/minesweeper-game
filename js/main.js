clickCounter = 0;
function mineNode() {
  this.strstatus = "unclicked";
  this.hasMine = false;
  this.surroundMines = 0;
  this.value = 0;
};
var mineGame = function(rows,cols,mines){
  this.rows = rows;
  this.cols = cols;
  this.mines = mines;
  this.isGameOver = false;
  var self = this;
  //this.boardSize = row * cols;
  this.board=[[]];

  this.drawBoard = function(){
    console.log(this);
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
        this.board[mineRow][mineColumn].value = -1;
			}
			else {
				i--;
			}
		}
    //find all mines and add value to adjecent cells
for(var col=0; col<self.board.length;col++)
{
  for(var row=0; row< self.board[col].length;row++)
  {
    if(self.board[row][col].hasMine)//has a mine
    {
      for (var k= -1;k<2; k++) {
        if(typeof self.board[row+k][col] !=='undefined')
          self.board[row+k][col].value++;
      }
      for (var k= -1;k<2; k++) {
        if(typeof self.board[row][col+k] !=='undefined')
          self.board[row][col+k].value++;
      }
      if(typeof self.board[row-1][col+1]!== 'undefined')
        self.board[row-1][col+1].value++;
      if(typeof self.board[row-1][col-1]!== 'undefined')
        self.board[row-1][col-1].value++;
    }
  }
}   var mineDiv = document.createElement('div');
    mineDiv.className = 'minesweeper';
    var colDiv =[];
    var rowDiv =[];
    for(var i =0;i<7;i++){
      colDiv[i] = document.createElement('div');
      colDiv[i].className = 'col';
      for(var j =0;j<7;j++)
      {
        rowDiv[j] = document.createElement('div');
        rowDiv[j].className = 'row';
        rowDiv[j].setAttribute('data-row',j);
        rowDiv[j].setAttribute('data-column',i);
        colDiv[i].appendChild(rowDiv[j]);
        rowDiv[j].addEventListener('click', this.checkClick);
      }
      mineDiv.appendChild(colDiv[i]);
    }
    //console.log(mineDiv);
    document.body.appendChild(mineDiv);
  };
  this.checkClick = function(event) { // logic to verify the Clicked element is mine or not
    //console.log(this);
    //this.innerHTML = "X";
    var row = this.getAttribute('data-row');
    var col = this.getAttribute('data-column');
    if(self.board[row][col].hasMine === true )
      this.innerHTML = "B"
    else
      this.innerHTML = self.board[row][col].value;
  };
};

window.onload = function(){
  mineGame = new mineGame(7,7,10);
  mineGame.drawBoard();
};
