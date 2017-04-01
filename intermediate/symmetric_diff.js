// Returns symmetric difference between two arrays.

function diffArray(arr1, arr2){

  // determine unique items from first array
  let uniqueFirst = arr1.filter((item) => !arr2.includes(item));
  // uniques for second
  let uniqueSecond = arr2.filter((item) => !arr1.includes(item));

  // return concatenation of two uniques
  return uniqueFirst.concat(uniqueSecond);

}

console.log(diffArray([1,2,3,4,5], [3,4,5,6,7]));