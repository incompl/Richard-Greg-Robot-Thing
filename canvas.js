(function() {
	
	window.rr.draw = function() {
		var board = window.rr.board;
		var canvas = document.getElementById("rrcanvas");
		var row, col,
			size = window.rr.size,
			scale = window.rr.scale,
			ctx = canvas.getContext("2d");
		for (row = 0; row < size; row++) { 
			for (col = 0; col < size; col++) {
				var tile = board[row][col];
				
				var x = (col + 0.5) * scale;
				
				var y = (row + 0.5) * scale;
				
				// Draw tile floor
				if (tile.offLimits) {
					ctx.fillStyle = "gray";
				}
				else {
					ctx.fillStyle = "silver";
				}
				ctx.strokeStyle = "rgb(220, 220, 220)";
				ctx.fillRect(x + scale * .1, y + scale * .1, scale * .8, scale * .8);
				ctx.strokeRect(x, y, scale, scale);
				
				// Draw robots
				if (tile.robot) {
					ctx.beginPath();
					ctx.fillStyle = tile.robot;
					ctx.strokeStyle = "black";
					ctx.lineWidth = 3;
					ctx.arc(x + scale / 2, y + scale / 2, scale / 3, 0, Math.PI*2, true);
					ctx.closePath();
					ctx.fill();
					if (window.rr.selected === tile.robot) {
						ctx.stroke();
					}
				}

				// Draw targets
				if (tile.target) {
					ctx.beginPath();
					ctx.fillStyle = "silver";
					ctx.strokeStyle = tile.target.color;
					ctx.lineWidth = 2;
					ctx.arc(x + scale / 2, y + scale / 2, scale / 3, 0, Math.PI*2, true);
					ctx.closePath();
					ctx.fill();
					ctx.stroke();
				}
				
				// Draw walls
				ctx.strokeStyle = "none";
				ctx.lineWidth = 1;
				if (tile.northWall) {
					ctx.fillStyle = "gray";
					ctx.fillRect(x, y, scale, scale * .1);
				}
				if (tile.southWall) {
					ctx.fillStyle = "gray";
					ctx.fillRect(x, y + scale * .9, scale, scale * .1);
				}
				if (tile.eastWall) {
					ctx.fillStyle = "gray";
					ctx.fillRect(x + scale * .9, y, scale * .1, scale);
				}
				if (tile.westWall) {
					ctx.fillStyle = "gray";
					ctx.fillRect(x, y, scale * .1, scale);
				}
				
			}
		}
	}

})();
