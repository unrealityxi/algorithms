// Returns sum of all integers in range between two numbers
// expects arguments to be passed as two number array.

function sumAll(arr){

  // asign items to vars for clarity ofcode
  let a = arr[0];
  let b = arr[1];
  
  // if a is bigger then b swap them
  a < b ? null : [a, b] = [b, a];
  
  // calculate sum
  let sum = 0;
  while (a <= b){
    sum += b;
    b--;
  }
  
  return sum;
}

console.log(sumAll([5, -5]));