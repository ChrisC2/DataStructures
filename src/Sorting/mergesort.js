function mergeSort(arr){
  //already sorted
  if(arr.length < 2){
    return arr
  }
  //split arr into left & right at midpoint
  var mid = Math.floor(arr.length / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  //merge both sorted arrays
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  //initialize results array
  var results = [];
  //add smaller values to results array first
  while(left.length && right.length){
    if(left[0] <= right[0]){
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  while(left.length) {
    results.push(left.shift());
  }
  while(right.length){
    results.push(right.shift())
  }
  return results
}

var values = [65,2,1,44,13,18,19,50,38]
var sorted = mergeSort(values);
console.log(sorted) //[ 1, 2, 13, 18, 19, 38, 44, 50, 65 ]
