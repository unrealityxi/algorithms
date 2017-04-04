// Transforms string to pig latin. 


function translatePigLatin(str) {
  // list of vowels
  var vowels = "aeiouAEIOU";

  // check if first letter is vowel
  if (vowels.includes(str[0])){
    return str + "way";
  }

  let firstVowelIndex;
  // loop over str and find first vowel index
  for (let i = 0; i < str.length; i++){
    if (vowels.includes(str[i])){
      firstVowelIndex = i;
      break;
    }
  }

  // makes permutation of required parts of string and adds ay
  let pigifiedStr = str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";

  return pigifiedStr;

}

translatePigLatin("consonant");