// array, item -> number
// Searches array for an item, returns index at which its found
// if not found, returns -1

const assert = require("assert");

function linearSearch(arr, term){

  // assume that term is not in array
  let index = -1;
  let length = arr.length;
  
  // loop over array
  for (let i = 0; i < length; i++){
    // check if item at index of i is equal to term
    if (arr[i] === term){
      index = i; 
      break;
    }
  }
  return index;
}

// linearSearch([1,2,3,4,5], 5) should return 4;
assert.strictEqual(linearSearch([1,2,3,4,5], 5), 4);
assert.strictEqual(linearSearch([1,2,-313, 5,4,3], 5), 3);
assert.strictEqual(linearSearch([1,2,3,4,5], 6), -1);
assert.strictEqual(linearSearch([], 6), -1);

