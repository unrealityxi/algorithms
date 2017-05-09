let arr = [51, 12, -12, 154, 152351, 1111, 12, 75347, 2356, 6235, 53];

function insertion_sort(arr){

  // traverse the array
  // assume that first item in array is already sorted
  for (let i = 1; i < arr.length; i++){
    
    // find index at which current entry is smaller then entry
    // to its left, and bigger from preceeding one (j)
    for (var j = 0; j < i; j++){
      if (arr[i] < arr[j]){
        break;
      }
    }

    //This is an alternative to the above step: 
    // let j = i - 1; 
    // while (arr[i] < arr[j]){
    //   j--
    // }
    // j += 1;


    // shift members of array one place to the right
    // from current position down to and including 
    // entry at j index 
    let forMoving = arr[i];

    for (let k = i; k > j; k--){
      arr[k] = arr[k - 1];
    }

    // finaly, place current value at J index. 
    arr[j] = forMoving;
  }

  return arr;
}

console.log(insertion_sort(arr));