//your JS code here. If required.
function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

let str = prompt("Enter a string:");
let result = firstNonRepeatingChar(str);
if (result) {
  alert("The first non-repeating character is: " + result);
} else {
  alert("No non-repeating character found.");
}
