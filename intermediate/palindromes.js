/************************************/
/* Checks if string is a palindrome */
/************************************/
"use strict";
function palindrome(str) {


  function isPalindrome(str){
    // možda izgleda impresivno, ali je loša praksa!!!
    var len = str.length
    return len <= 1 ? true : !(str[0] === str[len - 1]) ? false : isPalindrome(str.slice(1, len - 1));
  }
    // ovo u function callu je regexp kod koji normalizuje 
  return isPalindrome(str.match(/[a-z]/ig).join("").toLowerCase());
}

console.log(palindrome("eyebora0987.,OBEYe"));