var spiralTraversal = function(tiles){
	var results = [];
	var startRowIndex = 0
	var endRowIndex = tiles[startRowIndex].length - 1
	var startColIndex = 0
	var endColIndex = tiles.length - 1

	while(startRowIndex <= endRowIndex && startColIndex <= endColIndex) {
    //right
	   for(var right = startColIndex; right < endRowIndex; right++){
	      results.push(tiles[startRowIndex][right]);
      }
	  //down
	   for(var down = startRowIndex; down < endColIndex; down++){
		     results.push(tiles[down][endRowIndex]);
	      }
	  //left
	   for(var left = endRowIndex; left > startColIndex; left--){
		     results.push(tiles[endColIndex][left]);
	      }
	  //up
	   for(var up = endColIndex; up > startRowIndex; up--){
		     results.push(tiles[up][startColIndex]);
	      }
	      startColIndex++;
	      startRowIndex++;
	      endRowIndex --;
	      endColIndex--;
	    }
	    return results;
}

var tiles = [
			[1,2,3,4],
			[5,6,7,8]
			]
var tiles1 = [
			[ 1, 2, 3, 4, 5],
			[ 6, 7, 8, 9, 10],
			[11,12,13,14,15],
			[16,17,18,19,20]
			]
var tiles3 = [
			[ 1, 2, 3, 4, 5, 6],
			[ 7, 8, 9,10,11,12],
			[13,14,15,16,17,18],
			[19,20,21,22,23,24]
			]
spiralTraversal(tiles1)
