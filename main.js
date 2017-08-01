var board;
var xSize = 10;
var ySize = 10;

var dead = 0;
var alive = 1;

function neighbors(board, x, y) {
	var n = 0
	for (var dx = -1; dx < 1; ++dx) {
		for (var dy = -1; dy < 1; ++dy) {
			var ax = x + dx;
			var ay = y + dy;
			if (board[ax][ay] == alive) {
				++n;
			}
		}
	}
	return n;
}

function kill(board, x, y) {
	if (board[x][y] == alive) {
		board[x][y] = dead;
	}
}

function makeLive(board, x, y) {
	if (board[x][y] == dead) {
		board[x][y] = alive;
	}
}

function nextStep(board) {
	for (var x = 0; x <= xSize; ++x) {
		for (var y = 0; y <= ySize; ++x) {
			var n = neighbors(board, x, y);
			if (n = 3) {
				makeLive(board, x, y);
			}
			if ((n < 2) || (n > 3)) {
				kill(board, x, y);
			}
		}
	}
}

function drawBoard(board) {
	var Text = "";
	for (var y = 0; y < ySize; ++y) {
		for (var x = 0; x < xSize; ++x) {
			Text += board[x][y] == alive ? "o" : "_";
		}
		Text += "<br/>";
	}
	document.getElementById("board").innerHTML = Text;
}

function main() {
    // *** Change this variable to choose a different baord setup from below
    var boardSetup = "blinker";
    
	board = new Array(xSize);
	for (var x = 0; x < xSize; ++x) {
		board[x] = new Array(ySize);
		for (var y = 0; y < ySize; ++y) {
			board[x][y] = 0;
		}
	}
	
	if (boardSetup == "blinker") {
	    board[1][0] = 1;
	    board[1][1] = 1;
	    board[1][2] = 1;
    } else if(boardSetup == "glider") {
	    board[2][0] = 1;
	    board[2][1] = 1;
	    board[2][2] = 1;
	    board[1][2] = 1;
	    board[0][1] = 1;
    } else if(boardSetup == "flower") {
        board[4][6] = 1;
        board[5][6] = 1;
        board[6][6] = 1;
        board[7][6] = 1;
        board[8][6] = 1;
        board[9][6] = 1;
        board[10][6] = 1;
        board[4][7] = 1;
        board[6][7] = 1;
        board[8][7] = 1;
        board[10][7] = 1;
        board[4][8] = 1;
        board[5][8] = 1;
        board[6][8] = 1;
        board[7][8] = 1;
        board[8][8] = 1;
        board[9][8] = 1;
        board[10][8] = 1;
    }
    
	drawBoard(board);
}