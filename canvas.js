(function() {

	window.rr.draw = function(board, canvas) {
		var row, col,
			size = window.rr.size,
			scale = window.rr.scale,
			ctx = canvas.getContext("2d");
		for (row = 0; row < size; row++) { 
			for (col = 0; col < size; col++) {
				var tile = board[row][col];
				
				var x = (col + 0.5) * scale;
				
				var y = (row + 0.5) * scale;
				
				ctx.fillStyle = "silver";
				ctx.strokeStyle = "rgb(220, 220, 220)";
				ctx.fillRect(x + scale * .1, y + scale * .1, scale * .8, scale * .8);
				ctx.strokeRect(x, y, scale, scale);
				
				if (tile.robot) {
					ctx.beginPath();
					ctx.fillStyle = tile.robot;
					ctx.arc(x + scale / 2, y + scale / 2, scale / 3, 0, Math.PI*2, true);
					ctx.closePath();
					ctx.fill();
				}
				
			}
		}
	}

})();
