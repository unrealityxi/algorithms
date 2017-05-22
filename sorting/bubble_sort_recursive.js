// unsorted array -> sorted array
// Sorts unsorted array using bubble sort 
// in bubble sort, it loops over array n times, picking at largest
// element and bubbling it up the array. 

let assert = require("assert");

function bubbleSort(arr){
  // ... arr

  function inner(arr, swaped, index){
    
    if(index < arr.length){
      let a = arr[index];
      let b = arr[index - 1];
      
      if (a > b){
        arr[index] = b;
        arr[index - 1] = a;
        swaped = true; 
      }
      
    } else if (!swaped){
      return arr;
    }

    return inner(arr, false, )
  }

  return [];
}

// bubbleSort([4,2,3,5,1]) should return [1,2,3,4,5];
assert.deepEqual([4,2,3,5,1],[1,2,3,4,5] )


