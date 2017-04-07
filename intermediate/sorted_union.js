// Takes number of arrays
// returns merged array removing duplicates 
// and preserving the original order of items in arrays


function uniteUnique(arr) {

  //make array out of arguments object
  var arr = Array.from(arguments);

return arr.reduce((acc, subArr) => {
  return acc.concat(subArr.filter((item) => !acc.includes(item)))
});
  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
