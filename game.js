/*

All possible cell properties:

 * southWall   true
 * northWall   true
 * eastWall    true
 * westWall    true
 * robot       "red", "green", "yellow", "blue"
 * target      {color: "red", shape: "moon"}

Shapes (for targets)

 * moon
 * planet
 * star
 * triangle
 * black hole

*/

window.rr = {};
window.rr.board = [];
window.rr.size = 16;

(function() {

	var x;
	var y;
	var width = window.rr.size;
	var height = window.rr.size;
	var row;

	for (y = 0; y < height; y++) {
		row = [];
		window.rr.board[y] = row;
		for (x = 0; x < width; x++) {
			row[x] = createCell(x, y);
		}
	}

	console.dir(window.rr.board);

	function createCell(x, y) {

		var cell = {};

		// 25% chance of wall on east
		if (Math.random() < .25) {
			cell.eastWall = true;
		}

		// 25% chance of wall on south
		if (Math.random() < .25) {
			cell.southWall = true;
		}

		// If there is a south wall on the cell north of us, put a north wall here
		if (y > 0 && window.rr.board[y - 1][x].southWall) {
			cell.northWall = true;
		}

		// If there is an east wall on the cell west of us, put a west wall here
		if (x > 0 && window.rr.board[y][x - 1].eastWall) {
			cell.westWall = true;
		}

		return cell;

	}

})();