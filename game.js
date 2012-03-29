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

window.board = [[{}]];

(function() {

	var x;
	var y;
	var width = 16;
	var height = 16;
	var row;
	var i = 0;

	for (y = 0; y < height; y++) {
		row = [];
		for (x = 0; x < width; x++) {
			row[x] = {val:++i};
		}
		window.board[y] = row;
	}

	console.dir(window.board);

})();