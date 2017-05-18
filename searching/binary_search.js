// arr -> number
// Searches sorted array for given value
// Returns index of the value if found
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

  // assume that value is not in the array
  let index = -1;
  let start = 0;
  let end = arr.length -1;
  let midpoint;


  while (start <= end){
    // midpoint is always on half of unlooked array portion
    midpoint = Math.floor((start + end)/2);
    currentVal = arr[midpoint];

    // Return midpoint index if values match
    if ( value === currentVal){
      index = midpoint;
      break;
    }
    // else determines logical comparison operator based on direction in which array is sorted
    // and sets end and start points acordingly
    compare[direction](value, currentVal) ? end = midpoint -1 : start = midpoint +1;

  }

  return index;
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

console.log("diff data");

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