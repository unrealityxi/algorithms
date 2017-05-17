// array, searchTerm -> number
// Searches the array for searchTerm, returns number which is the index
// on which number is found. If not found, returns -1

const assert = require("assert");

function linearSearch(arr, searchTerm){

  function inner(arr, searchTerm, i){
    if (i < 0){
      return -1
    } else if (arr[i] === searchTerm){
      return i;
    }
    return inner(arr, searchTerm, i - 1);
  }

  
  return inner(arr, searchTerm, arr.length -1);

}

// linearSearch([1,2,3,4,5], 5) should return 4;
assert.strictEqual(linearSearch([1,2,3,4,5], 5), 4);
assert.strictEqual(linearSearch([1,2,-313, 5,4,3], 5), 3);
assert.strictEqual(linearSearch([1,2,3,4,5], 6), -1);
assert.strictEqual(linearSearch([], 6), -1);