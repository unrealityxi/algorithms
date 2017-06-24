// arr: array
// func: user defined function 
// Determines the pivot point in array
// which is the first array in the item that 
// satisfies user defined condition 
// Returns portion of array after the pivot. 

function dropElements(arr, func) {
  // Drop them elements.

  let pivot;

  for (let i = 0; i < arr.length; i++){
    if (func(arr[i])){
      pivot = i;
      break;
    }
  }


  return pivot === 0 ? arr.slice() : pivot ? arr.slice(pivot) : [];
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));