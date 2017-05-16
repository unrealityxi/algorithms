// array -> array
// Flattens the multidimensional away, returns flattened array. 
function steamrollArray(arr){
  
  let flattened = [];
  function innerRecursion(arr){
    arr.forEach((item) => {
      if(Array.isArray(item)){
        innerRecursion(item);
      } else {
        flattened.push(item);
      }
    });
  }
  innerRecursion(arr);
  return flattened;

}

console.log(steamrollArray([1, [2], [3, [[4]]]]));