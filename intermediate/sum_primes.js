function sumPrimes(num) {
 let sum = 0;

 for (let i = 0; i <= num; i++){
   isPrime(i) ? sum += i : null;
 }
  return sum;
}



// Test if num is prime
function isPrime(n){

  if (n <= 1){
    return false;
  }
  else if (n <= 3 ){
    return true;
  }
  // if num is divisible by 2 or 3 its obviously not a prime
  else if(n % 2 == 0 || n % 3 == 0){
    return false;
  }

  let i = 5;

  // while square of i is less then n
  while (i * i <= n){
    if (n % i == 0 || n % (i + 2) == 0){
      return false;
    }
    i += 6;
  }
  return true;
}

console.log(sumPrimes(977));