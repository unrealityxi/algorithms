let arr = ["z", "a", 626, 4414, -5, 122, 335, 19874, 122];



function selection_sort(arr){
  let len = arr.length;

  for (let i = 0; i < len; i++){

    // determine unsorted portion of the list
    let unsorted = arr.slice(i);
    
    // index of smallest number in the array
    // is equal to sum of smallest from unsorted portion
    // and length of the sorted
    let indexOfMin = i + indexOfSmallest(unsorted);

    // once we have smallest from unsorted portion,
    // we can swap it with first item in it.
    swap(arr, i, indexOfMin);
  }

  return arr;
}



// Determines index of smallest number in array
function indexOfSmallest(arr){
  let min = 0;
  let len = arr.length;

  for (let i = 1; i < len; i++){
    if (arr[i] < arr[min]){
      min = i;
    }
  }
  return min;

}

// swaps two items at indexes a, b in array

function swap(arr, a, b){
  console.log("swaping ", arr[a], "and ", arr[b] );
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;

}

console.log(selection_sort(arr));