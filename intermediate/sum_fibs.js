
function sumFibs(num) {

  let sum = 0;
  let prev = 0; 
  let current = 1; 
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
