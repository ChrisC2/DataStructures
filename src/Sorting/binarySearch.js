var binarySearch = function(arr, target){
  var minIndex = 0;
  var maxIndex = arr.length - 1;
  var mid;
  var element;

  while(minIndex <= maxIndex){
    mid = Math.floor(arr.length / 2);
    element = arr[mid];
    if(element < target){
      mid = minIndex + 1;
    }
    if(element > target){
      mid = maxIndex - 1;
    }
    if(element === target){
      return mid
    }
  }
  return -1;
}
