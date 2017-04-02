// filters array of objects so that 
// only objects with specified key val pairs remain

function whatIsInAName(collection, searchTerm){
  
  // Make criteria for filter function
  function containsPropAndVal(obj, search){

    let objKeys = Object.keys(obj);
    let searchKeys = Object.keys(search);

    // loop over search keys and compare them to 
    // keys in object
    // return false if not key in object or values of keys mismatch
    for (let i = 0; i < searchKeys.length; i++ ){
      let key = searchKeys[i];
      if (!objKeys.includes(key)){
        return false;
      }
      else if (obj[key] !== search[key]){
        return false;
      }
    }

    // return true if we get to this point
    return true;
  }

  // Filter collection of objects according to above criteria
  let filtered = collection.filter((obj) => containsPropAndVal(obj, searchTerm));

  return filtered;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));