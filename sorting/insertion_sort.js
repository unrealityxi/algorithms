let arr = [51, 12, -12, 154, 152351, 1111, 12, 75347, 2356, 6235, 53];

function insertion_sort(arr){

  let len = arr.length;
  // traverse the array
  // assume that first item in array is already sorted
  for (let i = 1; i < len; i++){
    
    // find index at which current entry is smaller then entry
    // to its left, and bigger from preceeding one (j)
    // shift members of array one place to the right
    // from current position down to and including 
    // entry at j index 
    let forMoving = arr[i];
    let j = i; 
    while (j > 0 && (arr[j - 1] > forMoving)){
      arr[j] = arr[j -1];
      j--
    }

    // finaly, place current value at J index. 
    arr[j] = forMoving;
  }

  return arr;
}

console.log(insertion_sort(arr));