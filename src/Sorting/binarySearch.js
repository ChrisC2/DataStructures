var binarySearch = function(arr, target){
  var minIndex = 0;
  var maxIndex = arr.length - 1;
  var mid;
  var element;

  while(minIndex <= maxIndex){
    mid = Math.floor((minIndex + maxIndex) / 2);
    element = arr[mid];
    if(element < target){
      minIndex = mid + 1;
    }
    if(element > target){
      maxIndex = mid - 1;
    }
    if(element === target){
      return mid
    }
  }
  return -1;
}
