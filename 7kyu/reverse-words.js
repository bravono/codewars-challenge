// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// MY SOLUTION
function reverseWords(str) {
  return str
    .split(" ")
    .map((w) => w.split("").reverse().join(""))
    .join(" ");
}

// MY SOLUTION 2
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
