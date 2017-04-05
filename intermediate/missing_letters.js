
// Determines and returns missing letter from string sequence.

function fearNotLetter(str) {
  
  let char = "";
  
  for(let i = 1; i < str.length; i++){
    let currentCharCode = str.charCodeAt(i);
    let prevCharCode = str.charCodeAt(i - 1);
    let diff = currentCharCode - prevCharCode;
    if (diff != 1){
      char = String.fromCharCode(currentCharCode - 1);
    }
  }

  return char;

}

fearNotLetter("abce");
