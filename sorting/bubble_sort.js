// Sorts array from smallest to largest. 

function bubble_sort(arr){

  arr = arr || ["a","t","c","y","i","e"];
  // keeps track whether swap hapened or not
  let swaped = true;

  // while swaps are hapening
  while (swaped){
    // asume that there are no swaps and array is sorted
    swaped = false;
    for(let i = 1; i < arr.length; i++){

      // if num to the left in arr is gt then his right neighbour
      // they are out of order, we should swap them
      if (arr[i - 1] > arr[i]){
        swap(arr, i, i -1);
        swaped = true;
      }
    }
  }

  return arr;

  function swap(arr, a, b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
}

console.log(bubble_sort());