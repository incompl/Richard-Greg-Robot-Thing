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
window.rr.robots = {};

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

	createRobot("red");
	createRobot("yellow");
	createRobot("green");
	createRobot("blue");

	function createCell(x, y) {

		var cell = {};

		// always include walls on board boundaries
		if (x === 0) {
			cell.westWall = true;
		}
		if (x === 15) {
			cell.eastWall = true;
		}
		if (y === 0) {
			cell.northWall = true;
		}
		if (y === 15) {
			cell.southWall = true;
		}

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

	function createRobot(color) {
		var x = Math.round(Math.random() * 15);
		var y = Math.round(Math.random() * 15);
		var cell = window.rr.board[y][x];

		if (cell.robot) {
			createRobot(color);
		}

		cell.robot = color;
		window.rr.robots[color] = {};
		window.rr.robots[color].x = x;
		window.rr.robots[color].y = y;
	}

	function moveRobot(color, direction) {

		var robot = window.rr.robots[color];

		if (!robot) {
			console.error("Can't find " + color + " robot!");
			return;
		}

		var nextX = robot.x;
		var nextY = robot.y;

		if (direction === "north") {
			nextY--;
		}
		else if (direction === "east") {
			nextX++;
		}
		else if (direction === "south") {
			nextY++;
		}
		else if (direction === "west") {
			nextX--;
		}
		else {
			console.error("Invalid direction: " + direction);
			return;
		}

	}

	moveRobot("red", "north");

})();