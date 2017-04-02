// Roman numeral converter 
// takes an int as arg 
// processes it in while loop 
// decrements it in chunks equal to roman letter value 
// and builds roman numeral string for every chunk it takes 
// of of arabic number. 

function convertToRoman(num) {
  // Makecopy of queried num, just in case
  let n = Math.floor(num); 
  let roman = "";

  while (n > 0){
    // convert 1000 to M
    if (n >= 1000){
      // decrement n for 1000
      n -= 1000;
      // increment romant string by corresponding value
      roman += "M";
    }
    // convert 900s
    else if (n >= 900){
      n -= 900;
      roman += "CM";
    }
    // conv 500s
    else if (n >= 500){
      n -= 500;
      roman += "D";
    }
    // etc ...
    else if (n >= 400){
      n -= 400;
      roman += "CD";
    }
    else if (n >= 100){
      n -= 100;
      roman += "C";
    }
    else if (n >= 90){
      n -= 90;
      roman += "XC";
    }
    else if (n >= 50){
      n -= 50;
      roman += "L";
    }
    else if (n >= 40){
      n -= 40;
      roman += "XL";
    }
    else if (n >= 10){
      n -= 10;
      roman += "X";
    }
    else if (n == 9){
      n -= 9; 
      roman += "IX";
    }
    else if (n >= 5){
      n -= 5;
      roman += "V";
    }
    else if (n >= 4){
      n -= 4;
      roman += "IV";
    }
    else if (n >= 1){
      n -= 1; 
      roman += "I";
    }
  }
  return roman;
}

console.log(convertToRoman(36));