// arr, value -> number 
// Recursively searches through sorted array for a given value
// if value found, returns index at which its found 
// else returns -1 

const assert = require("assert");

function binarySearch(arr, value){
// determine direction in which array is sorted
  let direction = arr[0] < arr[arr.length - 1] ? "<" : ">";
  
  // set up operations
  // this enables moving through array in either direction
  let compare = {
    "<": function(a, b){
      return a < b;
    },
    ">": function(a, b){
      return (a > b);
    }
  };

  // handles the actual recursion
  function inner(arr, value, start, end){

    // find midpoint of unsearched portion of array
    var mid = Math.floor((start+end)/2);
    
    // if found ...well, its found.
    if (arr[mid] === value){
      return mid;
    } else if (start >= end){
      return -1;
    } 

    return (compare[direction](value, arr[mid]) ? 
              inner(arr, value, start, mid -1) : 
              inner(arr, value, mid + 1, end));  

  }

  return inner(arr, value, 0, arr.length -1 ) 

}

// binarySearch([0,1,2,3,4,5,6,7,8], 4) should return 4;
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16], 4), 2);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16], 8), 4);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16], 10), 5);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16], 0), 0);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16], 16), 8);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16], 900), -1);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16], -900), -1);


assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16].reverse(), 14), 1);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16].reverse(), 0), 8);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16].reverse(), 8), 4);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16].reverse(), 10), 3);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16].reverse(), 16), 0);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16].reverse(), 900), -1);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14,16].reverse(), -900), -1);

assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14], 14), 7);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14], 0), 0);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14], 8), 4);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14], 6), 3);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14], 900), -1);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14], -900), -1);

assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14].reverse(), 14), 0);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14].reverse(), 0), 7);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14].reverse(), 8), 3);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14].reverse(), 6), 4);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14].reverse(), 900), -1);
assert.strictEqual(binarySearch([0,2,4,6,8,10,12,14].reverse(), -900), -1);