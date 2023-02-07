/* CHALLENGE:
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

*/


// Using Regex to make it simple
function palindrome(str) {
  //get rid of anything that isn't a letter or a digit with \W
  let arr = str.replace(/[_\W]/g, '')
  .toLowerCase()
  .split('');
  let newStr = arr.join('');
  return newStr === arr.reverse().join('');
}

console.log(palindrome("$%  _ 5sEyeS5"));

export default palindrome
