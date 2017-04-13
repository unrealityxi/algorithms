
function sumFibs(num) {
  
  // first check fibs edge cases && hardcode results
  if (num <= 0){
    return 0;
  }
  else if (num == 1){
    return 0;
  }
  else if (num == 2) {
    return 2;
  }
  
  let sum = 2;
  let prev = 1; 
  let current = 2; 
  let temp; 

  while(current <= num){

    // check if current number is eligible to be added to sum
    if ((current % 2) !== 0){
      sum += current;
    }

    // save current number
    temp = current; 

    // mutate current into next value by adding prev to it
    current += prev; 
    // revrite temp with old current value
    prev = temp;

  }
  
  return sum;
}

console.log(sumFibs(10));
