/* Creates base DNA pairs based on string. */
function pairElement(str) {

  // Lookup table with base pair maping
  const lookup = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }

  // Split str to array
  // map base pairs into 2 member subarray
  // use lookup table to pair them
  let paired = str.split("").map((letter) => {
    return [letter, lookup[letter]];
  });

  return paired;
}

pairElement("GCG");