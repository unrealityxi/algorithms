
// Calculates smallest common multiple of range of numbers.

function smallestCommons(arr) {
  let nums = [];

  let from = Math.min(...arr);
  let to = Math.max(...arr);

  // populate array 
  for (let i = from; i<= to; i++){
    nums.push(i);
  }
  
  // Find grreatest common divisor of a two numbers
  function gcd(a, b){
    return b == 0 ? a : gcd(b, a % b);
  }

  // find lowest common multiple for two given numbers
  function lcm(a, b){
    return (a * b) / gcd(a, b);
  }

  return nums.reduce(lcm);
}

console.log(smallestCommons([1, 5]));