// arr -> arr
// Takes array as argument and returns sorted array
// using merge sort algorithm. 

function mergeSort(arr){
  // Takes array as argument and mutates it into sorted array

  var len = arr.length;
  if (len < 2){
    return;
  }
  var mid = Math.floor(len/2); 
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  // Recursively splits, then sorts left and right half of array
  mergeSort(left);
  mergeSort(right);
  // merges two sorted halves
  merge(left, right, arr);
}


function merge(left, right, arr){
  // Merges two subarrays into single array.


  var leftLength = left.length;
  var rightLength = right.length;

  // Represents index in left array;
  var i = 0;
  // Represents index in right array;
  var j = 0;
  // Represents index of parent array
  var k = 0;

  // Loops untill it reaches end of both subarrays
  while (i < leftLength && j < rightLength){
    // compares i-th entry in left array to j-th entry in right one
    // both begin at zero;
    if (left[i] <= right[j]){
      // asigns i-th value to merged array and increments the index
      arr[k] = left[i];
      i++;
    } else {
      // assigns jth value from right array into merged array
      arr[k] = right[j];
      j++;
    }
    // increment parent array index;
    k++;
  }

  // After previous procedure finishes, whatever is left in either
  // left or right array must be sorted
  // Its gonna be tail part of either subarray
  // so, we have to overwrite values at matching indices in parent
  // with those values.
  
  while (i < leftLength){
    arr[k] = left[i];
    i++;
    k++;
  }
  while (j < rightLength){
    arr[k] = right[j];
    j++;
    k++;
  }
}


let arr = [1,10,3,4,5,6,7,8,9,2,11];
mergeSort(arr);

console.log(arr);