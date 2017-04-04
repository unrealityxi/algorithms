// Custom search function
// takes string for first arg 
// word in string to be replaced 
// word to replace it with 
// replaces the word while keeping original's word casing
//

function myReplace(str, before, after) {
  // if original string starts with uppercase, capitalize replace string
  if (before[0] === before[0].toUpperCase()){
    after = after.replace(/\b\w/g, l => l.toUpperCase());
  }
  else {
    after = after.replace(/\b\w/g, l => l.toLowerCase());
  }

  var re = new RegExp(before, "g");
  
  return str.replace(re, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");