//O(nlogn) complexity
var quickSort = function(arr){
  var left = [];
  var right = [];

  //pick a pivot value
  var pivot = arr[0];
  if(arr.length === 0){
      return []
  }
  for(var i = 1; i < arr.length; i++){
    if(arr[i] > pivot){
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

var values = [33,16,43,2,1,7,9,14]
quickSort(values) //[ 1, 2, 7, 9, 14, 16, 33, 43 ]
