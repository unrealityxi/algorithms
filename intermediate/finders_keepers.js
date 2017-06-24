// arr: array of any values
// func: function to be aplied to each member of an array
// Loops over members of an array, passes them in a user
// suplied function. 
// Returns the first element which passes the condition
// defined in function.  

function findElement(arr, func) {

  // Filters the array to match all items that pass truth test
  let filtered = arr.filter((item) => {func(item)});
  // returns first item in array. If no such item, will return
  // "undefined"
  return filtered[0]

}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }))