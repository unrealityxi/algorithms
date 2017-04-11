// Converts &<>"' to html entities 

let myStr = "bahah ' & <> \" lol";

function convertHTML(str) {
  // Lookup table for ents

  let lookup = {
    "\&": "&amp;",
    "\<": "&lt;",
    "\>": "&gt;",
    "\"": "&quot;",
    "\'": "&apos;",
  }

  Object.keys(lookup).forEach((key) => {
    // first make new regexp for corresponding char
    var toReplace = new RegExp(key, "g");

    // determine with what to replace it
    var replaceWith = lookup[key];

    // do the actual work
    str = str.replace(toReplace, replaceWith);
  });


  return str;
}

console.log(convertHTML(myStr));